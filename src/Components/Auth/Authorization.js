import { appKeys } from "../../keys";
import {
  redirectToAuthCodeFlow,
  getAccessToken,
} from "../../Utils/tokenSupport";

function Authorization() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  if (!code) {
    redirectToAuthCodeFlow(appKeys.clientId, appKeys.redirectUri);
  } else if (sessionStorage.getItem(appKeys.tokenId) === null) {
    getAccessToken(appKeys.clientId, code, appKeys.redirectUri).then(
      (result) => {
        if (result !== null && result !== undefined) {
          console.log(result);
          sessionStorage.setItem(appKeys.tokenId, result);
        }
      }
    );
  }
}

export default Authorization;
