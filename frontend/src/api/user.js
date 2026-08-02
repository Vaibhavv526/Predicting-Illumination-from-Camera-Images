import axios from "axios";

const API_URL =
  "https://predicting-illumination-from-camera-images-production.up.railway.app";

export const getProfile = async () => {
  const token = localStorage.getItem("access_token");

  const response = await axios.get(
    `${API_URL}/users/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};