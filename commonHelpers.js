import{a as d,S as y,i as f}from"./assets/vendor-eeed083b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const h="40188796-142b3a6aed6b1a3d407973769";d.defaults.baseURL="https://pixabay.com";d.defaults.params={key:h,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};async function b(t,o){const{data:n}=await d.get("api/",{params:{q:t,page:o}});return{images:n.hits,totalImages:n.totalHits}}const L=new y(".gallery a",{captionsData:"alt",captionDelay:250}),a={page:1,query:"",cardHeight:0},i={form:document.querySelector("form"),input:document.querySelector("input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more")};i.form.addEventListener("submit",v);i.loadMore.addEventListener("click",S);function u(t,o=""){const n={message:t,position:"topRight"};o&&(n.title=o),f.error(n)}function q(t){const o={message:t,position:"topRight"};f.success(o)}function c(t=!0){if(t){i.loadMore.classList.add("is-hidden");return}i.loadMore.classList.remove("is-hidden")}async function p(){try{const{images:t,totalImages:o}=await b(a.query,a.page);if(t.length===0){u("Sorry, there are no images matching your search query. Please try again."),c(!0);return}a.page>=o/40?(q("Hooray! We found totalHits images."),c(!0)):c(!1),i.gallery.insertAdjacentHTML("beforeend",w(t)),L.refresh(),a.cardHeight=i.gallery.firstElementChild.clientHeight,window.scrollBy({top:a.cardHeight-200,behavior:"smooth"})}catch{u("Sorry, something went wrong. Please try again."),c(!0)}}function v(t){if(t.preventDefault(),i.gallery.innerHTML="",i.input.value===""){u("Please enter a search query.");return}i.input.value===a.query?a.page+=1:(a.query=i.input.value,a.page=1),p()}function S(){a.page+=1,p()}function w(t){return t.map(({id:o,webformatURL:n,largeImageURL:l,likes:e,views:r,comments:s,downloads:m,tags:g})=>`
        <a class="photo-card" href="${l}">
            <img src="${n}" alt="${g}" loading="lazy" />
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    ${e}
                </p>
                <p class="info-item">
                    <b>Views</b>
                    ${r}
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    ${s}
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    ${m}
                </p>
            </div>
        </a>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
