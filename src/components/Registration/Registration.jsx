import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import "./Registration.scss";
import Header from "../Header/Header";

function Regestration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error("Сетевой запрос не удался");
      }
      await response.json();
      alert("Регистрация прошла успешно!");
    } catch (error) {
      console.error("Ошибка:", error);
      if (error.message === "Failed to fetch") {
        alert(
          "Ошибка при отправке данных на сервер. Проверьте, доступен ли сервер и настроен ли CORS."
        );
      } else {
        alert("Ошибка при отправке данных на сервер");
      }
    }
  };

  return (
    <>
    <Header/>
    <section className="registration">
      <SideBar />
      <form className="registration__form" onSubmit={handleSubmit}>
        <h1 className="registration__title">Регистрация</h1>
        <div className="registration__input">
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="registration__input">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="registration__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </section>
    </>
  );
}

export default Regestration;
