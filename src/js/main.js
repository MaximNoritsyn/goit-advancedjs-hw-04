import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from "./api-services";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

const vars = {
    page: 1,
    query: "",
    cardHeight: 0,
};

const selectors = {
    form: document.querySelector("form"),
    input: document.querySelector("input"),
    button: document.querySelector("button"),
    gallery: document.querySelector(".gallery"),
    loadMore: document.querySelector(".load-more"),
};

selectors.form.addEventListener("submit", handlerSubmit);
selectors.loadMore.addEventListener("click", loadMoreHandler);

function sendError(message) {
    const options = {
        message,
        position: "topRight",
    };
    iziToast.error(options);
}

function sendSuccess(message) {
    const options = {
        message,
        position: "topRight",
    };
    iziToast.success(options);
}

function loadMoreSettings(hidden = true) {
    if (hidden) {
        selectors.loadMore.classList.add("is-hidden");
        return;
    }
    selectors.loadMore.classList.remove("is-hidden");
}

async function fetchMoreImages() {
    try {
        const { images, totalImages } = await fetchImages(vars.query, vars.page);
        if (images.length === 0) {
            sendError("Sorry, there are no images matching your search query. Please try again.")
            return;
        }
        if (vars.page === 1) {
            sendSuccess(`Hooray! We found ${totalImages} images.`)
        }

        selectors.gallery.insertAdjacentHTML("beforeend", murkupImages(images));
        lightbox.refresh();

        if (vars.page >= (totalImages / 40)) {
            sendError("We're sorry, but you've reached the end of search results.")
        }
        else {
            loadMoreSettings(false);
        }

        vars.cardHeight = selectors.gallery.firstElementChild.clientHeight;
        window.scrollBy({
            top: vars.cardHeight - 200,
            behavior: "smooth",
        });

    } catch (error) {
        sendError("Sorry, something went wrong. Please try again.")
        loadMoreSettings(true);
    }
}

function handlerSubmit(event) {
    event.preventDefault();
    loadMoreSettings(true);
    selectors.gallery.innerHTML = "";
    const search_value = selectors.input.value.trim();
    if (search_value === "") { 
        sendError("Please enter a search query.");
        return;
    }
    if (search_value === vars.query) {
        vars.page += 1;
    }
    else {
        vars.query = search_value;
        vars.page = 1;
    }
    
    fetchMoreImages();
}

function loadMoreHandler() {
    vars.page += 1;
    fetchMoreImages();
}

function murkupImages(images) {
    return images.map(({ id,
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
        tags
    }) => {
        return `
        <a class="photo-card" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    ${likes}
                </p>
                <p class="info-item">
                    <b>Views</b>
                    ${views}
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    ${comments}
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    ${downloads}
                </p>
            </div>
        </a>`;
    }).join("");
}
