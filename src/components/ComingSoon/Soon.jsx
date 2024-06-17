import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import "./Soon.scss";
import Header from "../Header/Header";

const Soon = () => {
  return (
    <>
    <Header/>
      <section className="soon">
        <SideBar />
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <img
            className="soon__img w-50"
            src="http://4.bp.blogspot.com/-Z9dJiifAj7g/VrIkhsdHhoI/AAAAAAAABxU/Te7Z3QKfjVQ/s1600/website_building_modern_line_style_web_construction_creative_design_development_vector_illustration_concept.jpg"
            alt=""
          />
          <div className="soon__title">Страница в разработке</div>
        </div>
      </section>
    </>
  );
};

export default Soon;
