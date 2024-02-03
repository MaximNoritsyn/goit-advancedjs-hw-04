import{a as u,S as y,i as d}from"./assets/vendor-eeed083b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const h="40188796-142b3a6aed6b1a3d407973769";u.defaults.baseURL="https://pixabay.com/";u.defaults.params={key:h,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};async function b(e,o){const{data:a}=await u.get("api",{params:{q:e,page:o}});return console.log(a),{images:a.hits,totalPages:a.totalhits}}const L=new y(".gallery a",{captionsData:"alt",captionDelay:250}),i={page:1,query:"",cardHeight:0},n={form:document.querySelector("form"),input:document.querySelector("input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more")};n.form.addEventListener("submit",v);n.loadMore.addEventListener("click",S);function f(e,o=""){const a={message:e,position:"topRight"};o&&(a.title=o),d.error(a)}function q(e){const o={message:e,position:"topRight"};d.success(o)}function c(e=!0){if(e){n.loadMore.classList.add("is-hidden");return}n.loadMore.classList.remove("is-hidden")}async function p(){try{const{images:e,totalPages:o}=await b(i.query,i.page);if(e.length===0){f("Sorry, there are no images matching your search query. Please try again."),c(!0);return}i.page>=o?(q("Hooray! We found totalHits images."),c(!0)):c(!1),n.gallery.insertAdjacentHTML("beforeend",M(e)),L.refresh(),i.cardHeight=n.gallery.firstElementChild.clientHeight,window.scrollBy({top:i.cardHeight*2,behavior:"smooth"})}catch(e){console.log(e.message,"Fetch error")}}function v(e){if(e.preventDefault(),n.gallery.innerHTML="",n.input.value===""){f("Please enter a search query.");return}n.input.value===i.query?i.page+=1:(i.query=n.input.value,i.page=1),p()}function S(){i.page+=1,p()}function M(e){return e.map(({id:o,webformatURL:a,largeImageURL:l,likes:t,views:r,comments:s,downloads:m,tags:g})=>`
        <a class="photo-card" href="${l}">
            <img src="${a}" alt="${g}" loading="lazy" />
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    ${t}
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
