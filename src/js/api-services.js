import axios from "axios";

const API_KEY='40188796-142b3a6aed6b1a3d407973769';
axios.defaults.baseURL = "https://pixabay.com";
axios.defaults.params = {
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 40,
};

export async function fetchImages(query, page) {
    const { data } = await axios.get("api/", {
        params: { q: query, page: page },
    });
    return {
        images: data.hits,
        totalImages: data.totalHits,
    };
}
