export function hideForUser(user) {
  return typeof user === "undefined" ? "" : "hidden";
}

export function hideForGuest(user) {
  return typeof user === "undefined" ? "hidden" : "";
}

export function logout(setUserCallback) {
  localStorage.clear();
  setUserCallback(undefined);
}
