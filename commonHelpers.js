import{S,i as n,a as w}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),h=document.querySelector(".gallery"),d=document.querySelector(".loader"),r=document.querySelector(".btn-load-more"),k=new S(".gallery a",{captionsData:"alt",captionDelay:250}),m=40;let l=1,p="";u.addEventListener("submit",q);r.addEventListener("click",$);async function q(o){o.preventDefault(),l=1,r.classList.add("hide"),h.innerHTML="",p=u.search.value.trim();const s=await fetchImages();s.hits.length===0?n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#fff"}):s.hits.length<m?(r.classList.add("hide"),n.error({position:"topRight",message:"We`re sorry, but you ve reached the end of search results.",backgroundColor:"#red"})):r.classList.remove("hide"),u.reset(),renderImages(s)}async function $(){l+=1,r.classList.add("hide");const o=await s();d.classList.add("hide"),r.classList.remove("hide"),l>=Math.ceil(o.totalHits/m)?(r.classList.add("hide"),n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#fff"})):r.classList.remove("hide"),c(o),C();async function s(){d.classList.remove("hide");try{return(await w.get("https://pixabay.com/api/",{params:{key:"41619692-6da96b2a0003032b895baebe3",q:p,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:l}})).data}catch(a){console.log(a.message),n.error({position:"topRight",message:"Sorry, servise unavailable",backgroundColor:"#fff"})}finally{d.classList.add("hide")}}function c(a){const e=a.hits.reduce((t,{webformatURL:i,largeImageURL:f,tags:g,likes:y,views:L,comments:b,downloads:v})=>t+`<li class='gallery-item'>
              <a class='gallery-link' href='${f}'>
                <img
                    class='gallery-image'
                    src='${i}'
                    alt='${g}'
                    width='360'
                    height='200'
                    />
              </a>
              <p class='gallery-tags'>Tags: ${g}</p>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${y}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${L}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${b}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${v}</span></p></li>
              </ul>
            </li>`,"");h.insertAdjacentHTML("beforeend",e),k.refresh()}}function C(){document.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:domRect*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
