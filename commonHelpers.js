import{a as y,i as p,S as b}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const L="https://pixabay.com/api/",S="43233775-39d154ba994f40051e2e1ec64";async function g(t,r){return(await y(L,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}})).data}function f(t){return t.map(({tags:r,likes:o,views:a,comments:e,downloads:s,webformatURL:i,largeImageURL:h})=>`<li class="gallery-item">
                <a class="gallery-link" href="${h}" >
                   <img
                     class = "gallery-image"
                     src = "${i}"
                     alt = "${r}"
                     />
                 </a>
                 <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${o}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Views</span>
                 <span class = "info">${a}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${e}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${s}</span>
                 </div></div>
            </li>`).join("")}function v(t){t.style.display="block"}function m(t){t.style.display="none"}const l=document.querySelector(".form"),d=document.querySelector(".css-loader"),u=document.querySelector(".gallery");let n=1;l.addEventListener("submit",w);async function w(t){t.preventDefault(),u.innerHTML="";const r=t.currentTarget.elements.data.value.trim();if(sessionStorage.setItem("text",r),n=1,r==="")return l.reset(),p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});v(d),await g(r,n).then(o=>{if(o.hits.length===0)return l.reset(),m(d),p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});l.reset(),m(d),u.insertAdjacentHTML("beforeend",f(o.hits)),q.refresh(),n<500&&c.classList.replace("btn-hidden","load-more"),n>=500&&c.classList.replace("load-more","btn-hidden")}).catch(o=>{l.reset(),p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}).finally(()=>{m(d)})}const c=document.querySelector(".load-more-btn");c.addEventListener("click",C);async function C(){c.disabled=!0;try{const t=sessionStorage.getItem("text"),r=await g(t,n);u.insertAdjacentHTML("beforeend",f(r.hits)),n+=1,c.disabled=!1;const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch(t){alert(t.message)}}const q=new b(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
