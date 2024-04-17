import{a as y,i as d,S as b}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const L="https://pixabay.com/api/",S="43233775-39d154ba994f40051e2e1ec64";async function g(t,s){return(await y(L,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}})).data}function u(t){return t.map(({tags:s,likes:r,views:o,comments:e,downloads:a,webformatURL:l,largeImageURL:h})=>`<li class="gallery-item">
                <a class="gallery-link" href="${h}" >
                   <img
                     class = "gallery-image"
                     src = "${l}"
                     alt = "${s}"
                     />
                 </a>
                 <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${r}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Views</span>
                 <span class = "info">${o}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${e}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${a}</span>
                 </div></div>
            </li>`).join("")}function v(t){t.style.display="block"}function w(t){t.style.display="none"}const c=document.querySelector(".form"),m=document.querySelector(".css-loader"),p=document.querySelector(".gallery"),n=document.querySelector(".load-more-btn");let i=1;c.addEventListener("submit",C);async function C(t){t.preventDefault(),p.innerHTML="";const s=t.currentTarget.elements.data.value.trim();if(sessionStorage.setItem("text",s),i=1,s===""){c.reset(),n.classList.replace("load-more","btn-hidden"),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}v(m);try{const r=await g(s,i);if(console.log(r),r.hits.length===0){c.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}c.reset(),p.insertAdjacentHTML("beforeend",u(r.hits)),f.refresh();const o=Math.ceil(r.totalHits/15);i<o&&n.classList.replace("btn-hidden","load-more"),i>=o&&n.classList.replace("load-more","btn-hidden")}catch{c.reset(),d.error({message:"Sorry, there was an error while searching for images. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}finally{w(m)}}n.addEventListener("click",q);async function q(){n.disabled=!0;try{const t=sessionStorage.getItem("text");i+=1;const s=await g(t,i);p.insertAdjacentHTML("beforeend",u(s.hits)),n.disabled=!1,s.hits.length<15&&n.classList.add("btn-hidden"),f.refresh();const r=document.querySelector(".gallery-item");console.log(r);const o=r.getBoundingClientRect().height;window.scrollBy({left:0,top:o*3,behavior:"smooth"})}catch(t){alert(t.message)}}const f=new b(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
