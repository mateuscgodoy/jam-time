import React from "react";
import {
  redirectToAuthCodeFlow,
  getAccessToken,
  getUserInfo,
} from "../../Utils/tokenSupport";
import { appKeys } from "../../keys";

function handleClickLogout(event) {
  document.location = `${appKeys.redirectUri}`;
  sessionStorage.clear();
}

function styleLoginButton(username) {
  const loginButton = document.getElementById("login");
  loginButton.classList.add("login-disabled");
  loginButton.textContent = `👋 Welcome ${username}!`;
  loginButton.style.fontSize = "1.2rem";
  loginButton.disabled = true;
  document.getElementById("logout").style.visibility = "visible";
}

function handleClickLogin() {
  redirectToAuthCodeFlow(appKeys.clientId, appKeys.redirectUri);
}

function Login({ setUserInfo }) {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  if (code && !sessionStorage.getItem(appKeys.tokenId)) {
    getAccessToken(appKeys.clientId, code, appKeys.redirectUri).then(
      (result) => {
        if (result !== null && result !== undefined) {
          console.log(result);
          sessionStorage.setItem(appKeys.tokenId, result);
          getUserInfo().then((result) => {
            const { display_name, country, id } = result;
            setUserInfo({ display_name, country, id });
            styleLoginButton(display_name);
          });
        }
      }
    );
  }

  return (
    <section className="login-section">
      <button id="login" onClick={handleClickLogin}>
        Login
      </button>
      <button id="logout" onClick={handleClickLogout}>
        Logout
      </button>
    </section>
  );
}

export default Login;
