export function hideForUser(user) {
  return typeof user === "undefined" ? "" : "hidden";
}

export function hideForGuest(user) {
  return typeof user === "undefined" ? "hidden" : "";
}

export function logout(setUserCallback) {
  localStorage.clear();
  setUserCallback(undefined);
  window.location.href = "/";
}

let baseUrl = "http://localhost:3000";

export function registerNewAccount(data, callback) {
  let url = baseUrl + "/api/users";
  let obj = getConfigurationForPostRequest(data);

  fetch(url, obj)
    .then((x) => x.json())
    .then((x) => callback(x))
    .catch((x) => callback(x));
}
export function creatNewCard(data, callback) {
  let url = baseUrl + "/api/cards";
  let obj = prepareRequest(data);

  fetch(url, obj)
    .then((response) => response.json())
    .then((response) => callback(response))
    .catch((error) => callback(error));
}
export function deleteCard(data, callback) {
  let url = baseUrl + "/api/cards/" + data;
  let obj = prepareDeleteRequest();

  fetch(url, obj)
    .then((response) => response.json())
    .then((response) => callback(response))
    .catch((error) => callback(error));
}
export function getUserCard(callback) {
  let url = baseUrl + "/api/cards/all";
  let obj = EmptyGETRequest();
  fetch(url, obj)
    .then((response) => response.json())
    .then((response) => callback(response))
    .catch((error) => callback(error));
}
export function getAllUsersCard(callback) {
  let url = baseUrl + "/api/cards/allUsersCards";
  let obj = EmptyGETRequest();
  fetch(url, obj)
    .then((response) => response.json())
    .then((response) => callback(response))
    .catch((error) => callback(error));
}

export function signInUser(data, callback) {
  let url = baseUrl + "/api/auth";
  let obj = getConfigurationForPostRequest(data);
  fetch(url, obj)
    .then((x) => x.json())
    .then((x) => callback(x))
    .catch((x) => callback(x));
}

export function getMeData(token, callback) {
  if (!token) return;
  let url = baseUrl + "/api/users/me";
  fetch(url, { headers: { "x-auth-token": token } })
    .then((x) => x.json())
    .then((x) => callback(x))
    .catch((x) => callback(x));
}

function getConfigurationForPostRequest(data) {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  };
}

function prepareRequest(data) {
  let token = localStorage.getItem("token");
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    method: "POST",
    body: JSON.stringify(data),
  };
}

function prepareDeleteRequest() {
  let token = localStorage.getItem("token");
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    method: "DELETE",
  };
}

function EmptyGETRequest() {
  let token = localStorage.getItem("token");
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    method: "GET",
  };
}
