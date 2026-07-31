import axios from "axios";
const API_BASE_URL = "http://127.0.0.1:8000";

export const predictImage = async (imageFile) => {
    const formData = new FormData();

    formData.append("file", imageFile); // now we have a formdata empty folder in which we can append the data

    const response = await axios.post( // Sending the Request with Axios
    `${API_BASE_URL}/predict/`,
    formData
);

return response.data;

};