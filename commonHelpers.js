import{S as h,i as L,a as b}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const n=document.querySelector(".form"),v=document.querySelector(".gallery"),r=document.querySelector(".loader"),p=document.querySelector(".more-results"),w=new h(".gallery a",{captionsData:"alt",captionDelay:250}),u=40,S=Math.ceil(500/u);let m="";n.addEventListener("submit",async a=>{a.preventDefault(),m=n.search.value.trim();try{r.classList.remove("hide");const t=await c();d(t)}catch(t){console.log(t.message)}finally{r.classList.add("hide"),console.log()}p.addEventListener("click",async()=>{try{r.classList.remove("hide");const t=await c();d(t),page>S&&L.error({position:"topRight",message:"We`re sorry, there are no more posts to load"}),r.classList.add("hide")}catch(t){console.log(t.message)}finally{r.classList.add("hide"),console.log()}})});async function c(){return page+=1,(await b.get("https://pixabay.com/api/",{params:{key:"41619692-6da96b2a0003032b895baebe3",q:m,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page}})).data}async function d(a){const t=a.hits.reduce((l,{webformatURL:i,largeImageURL:e,tags:s,likes:o,views:g,comments:f,downloads:y})=>l+`<li class='gallery-item'>
              <a class='gallery-link' href='${e}'>
                <img
                    class='gallery-image'
                    src='${i}'
                    alt='${s}'
                    width='360'
                    height='200'
                    />
              </a>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${o}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${g}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${f}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${y}</span></p></li>
              </ul>
            </li>`,"");v.insertAdjacentHTML("beforeend",t),w.refresh(),p.classList.remove("hide")}
//# sourceMappingURL=commonHelpers.js.map
