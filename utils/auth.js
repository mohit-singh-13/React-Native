import axios from "axios";
import { Alert } from "react-native";

const BACKEND_URL = "https://identitytoolkit.googleapis.com";
const API_KEY = "";

export const authenticate = async (mode, email, password) => {
  const urlPath = mode === "login" ? "signInWithPassword" : "signUp";
  const URL = `${BACKEND_URL}/v1/accounts:${urlPath}?key=${API_KEY}`;

  try {
    const response = await axios.post(URL, {
      email,
      password,
      returnSecureToken: true,
    });

    return response.data.idToken;
  } catch (err) {
    if (err instanceof Error) {
      Alert.alert(
        "Authentication failed",
        "Could not perform the action. Please check your credentials"
      );
      return;
    }
    return;
  }
};

export const createUser = async (email, password) => {
  return await authenticate("signup", email, password);
};

export const loginUser = async (email, password) => {
  return await authenticate("login", email, password);
};
