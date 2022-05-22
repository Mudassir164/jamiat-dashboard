import React from "react";
import "./LogInScreen.css";
const LoginScreen = () => {
  return (
    <section className="LoginSection">
      <div className="loginForm">
        <div className="input-container">
          <input type="text" placeholder="Username" />
          <i class="zmdi zmdi-account zmdi-hc-lg"></i>
        </div>

        <div className="input-container">
          <input type="password" placeholder="Password" />
          <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
        </div>

        <button type="submit">Log In</button>
      </div>
    </section>
  );
};

export default LoginScreen;
