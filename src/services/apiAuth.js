import axios from "axios";

const REACT_APP_API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8000";

export function signIn(body) {
  const promise = axios.post(REACT_APP_API_URL, body);
  return promise;
}

export function signUp(body) {
  const promise = axios.post(`${REACT_APP_API_URL}/cadastro`, body);
  return promise;
}
