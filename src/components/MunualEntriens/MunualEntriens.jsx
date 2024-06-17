import React, { useState, useEffect } from "react";
import "./MunualEntriens.scss";
import { format } from "date-fns";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const MunualEntriens = () => {
  const [name, setGroupName] = useState("");
  const [entry_date, setPurchaseDate] = useState("");
  const [amount, setPrice] = useState("");
  const [select, setSelect] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedPurchaseDate = entry_date
      ? format(new Date(entry_date), "yyyy-MM-dd")
      : "";
    const formData = {
      name,
  
      entry_date: formattedPurchaseDate,
      amount,
    };

    console.log("Отправляемые данные:", formData);

    try {
      const response = await fetch("http://localhost:3001/addMunual", {
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
	useEffect(() => {
		const fetchOptions = async () => {
			try {
				const response = await fetch("http://localhost:3001/socialNames");
				if (!response.ok) {
					throw new Error(`Ошибка при получении данных: ${response.status} ${response.statusText}`);
				}
				const data = await response.json();
				console.log("Прилетает список пабликов:", data);
				// Преобразование данных для select
				const selectOptions = data.map(item => ({
					value: item.name,
					label: item.name
				}));
				setSelect(selectOptions);
			} catch (error) {
				console.error("Ошибка при выполнении запроса:", error.message);
			}
		};
	
		fetchOptions();
	}, []);

  return (
    <>
		<Header/>
      <section className="munual">
        <SideBar />
        <form onSubmit={handleSubmit}>
          <h1 title="">Добавить ручное размещение</h1>
          <div class="group">
            <label for="">Название паблика:</label>
            <select
              id="publicSelect"
              placeholder="Выбирите паблик"
              value={name}
              onChange={(e) => setGroupName(e.target.value)}
            >
              <option>Выбирите паблик</option>
              {select.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div class="group">
            <label for="">Дата размещения:</label>
            <input
              type="date"
              placeholder="Укажите дату размещения"
              value={entry_date}
              onChange={(e) => setPurchaseDate(e.target.value)}
            />
          </div>
          <div class="group">
            <label for="">Стоимость:</label>
            <input
              type="number"
              placeholder="Укажите стоимость"
              value={amount}
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

export default MunualEntriens;
