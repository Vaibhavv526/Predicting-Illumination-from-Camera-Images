import axios from "axios";

const API_BASE_URL =
  "https://predicting-illumination-from-camera-images-production.up.railway.app";

export const predictImage = async (imageFile) => {
    const formData = new FormData();

    formData.append("file", imageFile);

    // Get the JWT token from localStorage
    const token = localStorage.getItem("access_token");

    const response = await axios.post(
        `${API_BASE_URL}/predict/`,
        formData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

export const getPredictionHistory = async () => {
    const token = localStorage.getItem("access_token");

    const response = await axios.get(
        `${API_BASE_URL}/predict/history`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};