import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Soon from "./components/ComingSoon/Soon";
import MunualEntriens from "./components/MunualEntriens/MunualEntriens";
import Registration from "./components/Registration/Registration";
import LoginForm from "./components/LoginForm/LoginForm";
import BaseData from "./components/BaseData/BaseData";
import AddPublic from "./components/Menedger/AddPublic";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authenticate = (status) => {
    setIsAuthenticated(status);
  };

  const routes = isAuthenticated
    ? [
        { path: "/base_date", element: <BaseData /> },
        { path: "/new_public", element: <AddPublic /> },
        { path: "/munual_entriens", element: <MunualEntriens /> },
        { path: "/main", element: <Soon /> },
        { path: "/users", element: <Registration /> },
        { path: "/access", element: <Soon /> },
      ]
    : [{ path: "/", element: <LoginForm onAuthenticate={authenticate} /> }];

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
