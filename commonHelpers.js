import{a as h,i as d,S as y}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const b="https://pixabay.com/api/",L="43233775-39d154ba994f40051e2e1ec64";async function u(t,r){return(await h(b,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}})).data}function g(t){return t.map(({tags:r,likes:a,views:o,comments:e,downloads:s,webformatURL:n,largeImageURL:f})=>`<li class="gallery-item">
                <a class="gallery-link" href="${f}" >
                   <img
                     class = "gallery-image"
                     src = "${n}"
                     alt = "${r}"
                     />
                 </a>
                 <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${a}</span>
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
                 <span class = "info">${s}</span>
                 </div></div>
            </li>`).join("")}function S(t){t.style.display="block"}function v(t){t.style.display="none"}const l=document.querySelector(".form"),m=document.querySelector(".css-loader"),p=document.querySelector(".gallery");let i=1;l.addEventListener("submit",w);async function w(t){t.preventDefault(),p.innerHTML="";const r=t.currentTarget.elements.data.value.trim();if(sessionStorage.setItem("text",r),i=1,r==="")return l.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});S(m),await u(r,i).then(a=>{if(a.hits.length===0)return l.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});l.reset(),p.insertAdjacentHTML("beforeend",g(a.hits)),q.refresh(),i<500&&c.classList.replace("btn-hidden","load-more"),i>=500&&c.classList.replace("load-more","btn-hidden")}).catch(a=>{l.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}).finally(()=>{v(m)})}const c=document.querySelector(".load-more-btn");c.addEventListener("click",C);async function C(){c.disabled=!0;try{const t=sessionStorage.getItem("text"),r=await u(t,i);p.insertAdjacentHTML("beforeend",g(r.hits)),i+=1,c.disabled=!1;const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}catch(t){alert(t.message)}}const q=new y(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
