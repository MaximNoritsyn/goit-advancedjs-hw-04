import{a as d,S as y,i as f}from"./assets/vendor-eeed083b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const h="40188796-142b3a6aed6b1a3d407973769";d.defaults.baseURL="https://pixabay.com";d.defaults.params={key:h,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};async function b(r,e){const{data:s}=await d.get("api/",{params:{q:r,page:e}});return{images:s.hits,totalImages:s.totalHits}}const L=new y(".gallery a",{captionsData:"alt",captionDelay:250}),a={page:1,query:"",cardHeight:0},n={form:document.querySelector("form"),input:document.querySelector("input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more")};n.form.addEventListener("submit",v);n.loadMore.addEventListener("click",S);function c(r){const e={message:r,position:"topRight"};f.error(e)}function q(r){const e={message:r,position:"topRight"};f.success(e)}function u(r=!0){if(r){n.loadMore.classList.add("is-hidden");return}n.loadMore.classList.remove("is-hidden")}async function p(){try{const{images:r,totalImages:e}=await b(a.query,a.page);if(r.length===0){c("Sorry, there are no images matching your search query. Please try again.");return}a.page===1&&q(`Hooray! We found ${e} images.`),n.gallery.insertAdjacentHTML("beforeend",w(r)),L.refresh(),a.page>=e/40?c("We're sorry, but you've reached the end of search results."):u(!1),a.cardHeight=n.gallery.firstElementChild.clientHeight,window.scrollBy({top:a.cardHeight-200,behavior:"smooth"})}catch{c("Sorry, something went wrong. Please try again."),u(!0)}}function v(r){r.preventDefault(),u(!0),n.gallery.innerHTML="";const e=n.input.value.trim();if(e===""){c("Please enter a search query.");return}e===a.query?a.page+=1:(a.query=e,a.page=1),p()}function S(){a.page+=1,p()}function w(r){return r.map(({id:e,webformatURL:s,largeImageURL:l,likes:t,views:o,comments:i,downloads:m,tags:g})=>`
        <a class="photo-card" href="${l}">
            <img src="${s}" alt="${g}" loading="lazy" />
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    ${t}
                </p>
                <p class="info-item">
                    <b>Views</b>
                    ${o}
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    ${i}
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    ${m}
                </p>
            </div>
        </a>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
