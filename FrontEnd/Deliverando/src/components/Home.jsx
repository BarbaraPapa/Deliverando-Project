import React, { useContext } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import { MyContext } from "../context/context.jsx";
import "../style/home.css";

export default function Home() {
  const { showRegister, token } = useContext(MyContext);

  return (
    <>
      <div className="reglogSection">
        <main className="contentSection">
          <div className="leftSide">
            <h1>Welcome to <span>Deliverando!</span></h1>
            <h2>Your Ultimate Food Delivery Solution</h2>
            <p>
              Craving your favorite dish but don't feel like leaving the comfort
              of your home? Look no further! Deliverando is here to satisfy your
              hunger pangs with just a few clicks
            </p>
          </div>
          <div className="rightSide">
            {showRegister ? <Login /> : <Register />}
          </div>
        </main>
      </div>
    </>
  );
}
