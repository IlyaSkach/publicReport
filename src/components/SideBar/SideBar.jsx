import React, { useState, useEffect } from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <section className="sidebar">
        <ul className="sidebar__ul">
          <li className="sidebar__li">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 21H21"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 6L12 3L19 6"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 10V21"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 10V21"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 14V17"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14V17"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 14V17"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link to="/main">Главная</Link>
          </li>
          <li className="sidebar__li">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8.42974C17.2581 8.42974 21.5207 6.83129 21.5207 4.85949C21.5207 2.8877 17.2581 1.28925 12 1.28925C6.74191 1.28925 2.47937 2.8877 2.47937 4.85949C2.47937 6.83129 6.74191 8.42974 12 8.42974Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.47937 4.8595V12C2.47937 12.9469 3.48244 13.855 5.26791 14.5245C7.05338 15.1941 9.47499 15.5702 12 15.5702C14.5251 15.5702 16.9467 15.1941 18.7322 14.5245C20.5176 13.855 21.5207 12.9469 21.5207 12V4.8595"
                stroke="black"
                strokWidth="1.5"
                strokLinecap="round"
                strokLinejoin="round"
              />
              <path
                d="M2.47937 12V19.1405C2.47937 20.0874 3.48244 20.9955 5.26791 21.665C7.05338 22.3346 9.47499 22.7107 12 22.7107C14.5251 22.7107 16.9467 22.3346 18.7322 21.665C20.5176 20.9955 21.5207 20.0874 21.5207 19.1405V12"
                stroke="black"
                strokWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link to="/base_date">База данных</Link>
          </li>
          <li className="sidebar__li">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9504 22.7107H6.0496C5.41834 22.7107 4.81294 22.4599 4.36657 22.0135C3.9202 21.5672 3.66943 20.9618 3.66943 20.3305V3.66935C3.66943 3.03809 3.9202 2.43269 4.36657 1.98632C4.81294 1.53995 5.41834 1.28918 6.0496 1.28918H14.3802L20.3306 7.2396V20.3305C20.3306 20.9618 20.0798 21.5672 19.6335 22.0135C19.1871 22.4599 18.5817 22.7107 17.9504 22.7107Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.42981 15.5702L10.81 17.9504L15.5703 13.1901"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3801 1.28918V6.04951C14.3801 6.36514 14.5055 6.66785 14.7287 6.89103C14.9519 7.11421 15.2546 7.2396 15.5702 7.2396H20.3305"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link to="/new_public">Новые паблики</Link>
          </li>
          <li className="sidebar__li">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5934 7.23969C17.3565 6.56758 16.9239 5.98173 16.3512 5.55755C15.7786 5.13337 15.0921 4.89027 14.3801 4.85953H9.61981C8.67292 4.85953 7.76481 5.23568 7.09526 5.90523C6.42571 6.57478 6.04956 7.48289 6.04956 8.42978C6.04956 9.37666 6.42571 10.2848 7.09526 10.9543C7.76481 11.6239 8.67292 12 9.61981 12H14.3801C15.327 12 16.2351 12.3762 16.9047 13.0457C17.5742 13.7153 17.9504 14.6234 17.9504 15.5703C17.9504 16.5172 17.5742 17.4253 16.9047 18.0948C16.2351 18.7644 15.327 19.1405 14.3801 19.1405H9.61981C8.90784 19.1098 8.22135 18.8667 7.64871 18.4425C7.07607 18.0183 6.64347 17.4325 6.40659 16.7604"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19.1405V22.7108M12 1.28928V4.85952V1.28928Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link to="/munual_entriens">Ручные размещения</Link>
          </li>
          <li className="sidebar__li">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_13044_475318)">
                <path
                  d="M8.42976 10.8098C11.0588 10.8098 13.1901 8.67857 13.1901 6.04952C13.1901 3.42046 11.0588 1.28918 8.42976 1.28918C5.80071 1.28918 3.66943 3.42046 3.66943 6.04952C3.66943 8.67857 5.80071 10.8098 8.42976 10.8098Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.28918 22.7107V20.3305C1.28918 19.068 1.79072 17.8572 2.68345 16.9645C3.57619 16.0717 4.787 15.5702 6.04952 15.5702H10.8098C12.0724 15.5702 13.2832 16.0717 14.1759 16.9645C15.0686 17.8572 15.5702 19.068 15.5702 20.3305V22.7107"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.7604 1.44385C17.7843 1.70602 18.6919 2.30154 19.34 3.13651C19.9882 3.97149 20.34 4.99842 20.34 6.05542C20.34 7.11241 19.9882 8.13935 19.34 8.97432C18.6919 9.80929 17.7843 10.4048 16.7604 10.667"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.7108 22.7106V20.3305C22.7047 19.2798 22.3512 18.2607 21.7055 17.4319C21.0597 16.6031 20.1578 16.0113 19.1405 15.7487"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13044_475318">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <Link to="/users">Пользователи</Link>
          </li>
          <li className="sidebar__li">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_13044_475311)">
                <path
                  d="M8.42976 10.8099C11.0588 10.8099 13.1901 8.67863 13.1901 6.04958C13.1901 3.42052 11.0588 1.28925 8.42976 1.28925C5.80071 1.28925 3.66943 3.42052 3.66943 6.04958C3.66943 8.67863 5.80071 10.8099 8.42976 10.8099Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.28918 22.7107V20.3306C1.28918 19.0681 1.79072 17.8573 2.68345 16.9645C3.57619 16.0718 4.787 15.5703 6.04952 15.5703H10.8098C12.0724 15.5703 13.2832 16.0718 14.1759 16.9645C15.0686 17.8573 15.5702 19.0681 15.5702 20.3306V22.7107"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.7108 8.42975L17.9504 13.1901M17.9504 8.42975L22.7108 13.1901L17.9504 8.42975Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13044_475311">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <Link to="/access">Права</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SideBar;
