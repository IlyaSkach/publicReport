import React, { useState, useEffect } from "react";
import "./BaseData.scss";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const BaseData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/data/public_page")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <>
    <Header/>
      <section className="basedata">
        <SideBar />
        <div class="container">
          <table class="responsive-table">
            <caption>Главная таблица public_page</caption>
            <thead>
              <tr>
                <th scope="col">Аватар группы</th>
                <th scope="col">Название группы</th>
                <th scope="col">Ко-во подписчиков</th>
                <th scope="col">Дата покупки</th>
                <th scope="col">Ссылка на группу</th>
                <th scope="col">Стоимость</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">
                    {" "}
                    <img
                      className="basedata__img"
                      src={item.image}
                      alt="Аватар группы"
                    />
                  </th>
                  <td data-title="Released">{item.name}</td>
                  <td data-title="Studio">{item.size}</td>
                  <td data-title="Worldwide Gross" data-type="currency">
                    {new Date(item.purchase_date).toLocaleDateString("ru-RU")}
                  </td>
                  <td data-title="Domestic Gross" data-type="currency">
                    {" "}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                    </a>
                  </td>
                  <td data-title="International Gross" data-type="currency">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default BaseData;
