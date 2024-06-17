import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

// add user

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__title">
          Пользователь: <span className="header__user">Admin</span>  
        </div>
      </header>
    </>
  );
};

export default Header;
