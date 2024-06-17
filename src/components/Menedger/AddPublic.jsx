import React, { useState, useEffect } from "react";
import "./AddPublic.scss";
import { format } from "date-fns";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const AddPublic = () => {
  const [link, setLink] = useState("");

  const [purchase_date, setPurchaseDate] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedPurchaseDate = purchase_date
      ? format(new Date(purchase_date), "yyyy-MM-dd")
      : "";
    const formData = {
      link,
      purchase_date: formattedPurchaseDate,
      price,
    };

    console.log("Отправляемые данные:", formData);

    try {
      const response = await fetch("http://localhost:3001/addData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Ошибка при отправке данных: ${response.status} ${response.statusText} - ${errorText}`
        );
      }

      const result = await response.json();
      console.log("Успешно:", result);
    } catch (error) {
      console.error("Ошибка:", error);
      if (error.response) {
        console.error("Статус ответа:", error.response.status);
        error.response
          .text()
          .then((text) => console.error("Тело ответа:", text));
      } else {
        console.error("Ошибка не связана с ответом сервера.");
      }
    }
  };

  return (
    <>
    <Header/>
      <section className="addpublic">
        <SideBar />
        <form onSubmit={handleSubmit}>
          <h1 title="Форма регистрации на сайте">Добавить новый паблик</h1>
          <div class="group">
            <label for="">Ссылка на паблик:</label>
            <input
              type="url"
              placeholder="Укажите ссылку на паблик"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div class="group">
            <label for="">Дата покупки:</label>
            <input
              type="date"
              placeholder="Укажите дату приобритения"
              value={purchase_date}
              onChange={(e) => setPurchaseDate(e.target.value)}
            />
          </div>
          <div class="group">
            <label for="">Стоимость:</label>
            <input
              type="number"
              placeholder="Укажите стоимость"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div class="group">
            <center>
              <button type="submit">Добавить</button>
            </center>
          </div>
          <style></style>
        </form>
      </section>
    </>
  );
};

export default AddPublic;
