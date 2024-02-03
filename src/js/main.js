import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from "./api-services";

const selectors = {
    form: document.querySelector("form"),
    input: document.querySelector("input"),
    button: document.querySelector("button"),
};

selectors.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = selectors.input.value;
    fetchImages(query, 1)
        .then((images) => {
            console.log(images);
        })
        .catch((error) => {
            iziToast.error({
                title: "Error",
                message: error.message,
            });
        });
}, false);