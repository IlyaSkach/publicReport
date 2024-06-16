const express = require("express");
const mysql = require("mysql");
const CONFIG = require("./config");
const cors = require("cors");
const session = require("express-session");

const app = express();
const port = 3001;
const bcrypt = require("bcrypt");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Pass

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Необходимо указать имя пользователя и пароль");
  }

  try {
    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // SQL запрос для добавления пользователя
    const sql =
      "INSERT INTO simplauth_users (username, password) VALUES (?, ?)";

    // Вызов функции для выполнения запроса к БД
    await queryDb(sql, [username, hashedPassword]);

    res.send("Пользователь успешно зарегистрирован");
  } catch (err) {
    console.error(err);
    res.status(500).send("Ошибка сервера при регистрации");
  }
});
app.use(
  session({
    secret: "3cDf!9*#sGvP",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Для HTTPS установите в true
  })
);

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM simplauth_users WHERE username = ?";
  try {
    const users = await queryDb(sql, [username]);
    if (users.length > 0) {
      const user = users[0];
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        req.session.userId = user.id; // Сохраняем ID пользователя в сессии
        res.json({ message: "Вы успешно вошли в систему!" });
      } else {
        res.status(401).send("Неверный пароль");
      }
    } else {
      res.status(404).send("Пользователь не найден");
    }
  } catch (err) {
    res.status(500).send("Ошибка сервера");
  }
});

function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).send("Необходима аутентификация");
  }
}

// Используйте isAuthenticated как middleware для защищенных маршрутов
app.get("/protected-route", isAuthenticated, (req, res) => {
  res.send("Это защищенный маршрут");
});
// end

function queryDb(query, params = []) {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(CONFIG);
    connection.connect((err) => {
      if (err) {
        console.error("Ошибка подключения к базе данных:", err);
        reject(err);
        return;
      }
    });

    connection.query(query, params, (err, result) => {
      connection.end();

      if (err) {
        console.error("Ошибка выполнения запроса к БД данных:", err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

app.get("/data/public_page", async (req, res) => {
  try {
    const result = await queryDb("SELECT * FROM public_page");
    res.json(result);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

app.post("/addData", async (req, res) => {
  const { link, purchase_date, price } = req.body;
  const sql =
    "INSERT INTO public_page (link, purchase_date, price) VALUES (?, ?, ?)";
  try {
    const result = await queryDb(sql, [link, purchase_date, price]);
    res.json("Data added to database");
  } catch (err) {
    res.status(500).send("ErrorM: " + err.message);
  }
});

app.post("/addMunual", async (req, res) => {
  const { name, amount, entry_date } = req.body;
  const sql =
    "INSERT INTO munual_entries (name, amount, entry_date) VALUES (?, ?, ?)";
  try {
    const result = await queryDb(sql, [name, amount, entry_date]);
    res.json("Data added to database");
  } catch (err) {
    res.status(500).send("ErrorM: " + err.message);
  }
});

app.get("/socialNames", async (req, res) => {
  try {
    const result = await queryDb("SELECT name FROM social_name");
    res.json(result);
  } catch (err) {
    res.status(500).send("Ошибка: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
