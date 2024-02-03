import{a as d,S as m,i as g}from"./assets/vendor-eeed083b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const y="40188796-142b3a6aed6b1a3d407973769";d.defaults.baseURL="https://pixabay.com/";d.defaults.params={key:y,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};async function h(t,o){const{data:i}=await d.get("api",{params:{q:t,page:o}});return console.log(i),{images:i.hits,totalPages:i.totalhits}}const b=new m(".gallery a",{captionsData:"alt",captionDelay:250}),a={page:1,query:"",cardHeight:0},n={form:document.querySelector("form"),input:document.querySelector("input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more")};n.form.addEventListener("submit",v);n.loadMore.addEventListener("click",L);function u(t,o=""){const i={message:t,position:"topRight"};o&&(i.title=o),g.error(i)}function c(t=!0){if(t){n.loadMore.classList.add("is-hidden");return}n.loadMore.classList.remove("is-hidden")}async function f(){try{const{images:t,totalPages:o}=await h(a.query,a.page);if(t.length===0){u("Sorry, there are no images matching your search query. Please try again."),c(!0);return}a.page>=o?(u("Hooray! We found totalHits images."),c(!0)):c(!1),n.gallery.insertAdjacentHTML("beforeend",q(t)),b.refresh(),a.cardHeight=n.gallery.firstElementChild.clientHeight,window.scrollBy({top:a.cardHeight*2,behavior:"smooth"})}catch(t){console.log(t.message,"Fetch error")}}function v(t){if(t.preventDefault(),n.gallery.innerHTML="",n.input.value===""){u("Please enter a search query.");return}n.input.value===a.query?a.page+=1:(a.query=n.input.value,a.page=1),f()}function L(){a.page+=1,f()}function q(t){return t.map(({id:o,webformatURL:i,largeImageURL:l,likes:e,views:r,comments:s,downloads:p})=>`
        <a class="photo-card" href="${l}">
            <img src="${i}" alt="" loading="lazy" />
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <div>${e}</div>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <div>${r}</div>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <div>${s}</div>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <div>${p}</div>
                </p>
            </div>
        </a>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
