import axios from "axios";

const BASE_URL = "https://indigo-hawk-956786.hostingersite.com/api/v1"; 

// Login
export const login = async (FormData) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, FormData);
  return response.data;
};

// Register
export const register = async (name, email, password) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, { name, email, password });
  return response.data;
};

// Reset Password
export const resetPassword = async (token, email, password, password_confirmation) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/reset-password`, {
      token,
      email,
      password,
      password_confirmation
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};


// Send Email
export const sendEmail = async (email) => {
  const response = await axios.post(`${BASE_URL}/auth/verify-email/S7LPVSteKUBxwYvdUO9FO5jVwGjSDi7VWi8xolWAhLso8Ya8ITWCoo6d3MLKKHox`, { email });
  return response.data;
};
