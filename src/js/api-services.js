import axios from "axios";

const API_KEY='40188796-142b3a6aed6b1a3d407973769';
axios.defaults.baseURL = "https://pixabay.com/";
axios.defaults.params = {
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
};

export const fetchImages = async (query, page) => {
    try {
        const { data } = await axios.get("api", {
            params: { q: query, page: page },
        });
        return data.hits;
    } catch (error) {
        throw error;
    }
}
