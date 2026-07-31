import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

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