import{S as h,i as L,a as b}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n=document.querySelector(".form"),v=document.querySelector(".gallery"),o=document.querySelector(".loader"),u=document.querySelector(".more-results"),w=new h(".gallery a",{captionsData:"alt",captionDelay:250}),p=40,S=Math.ceil(500/p);let m="";n.addEventListener("submit",async a=>{a.preventDefault(),m=n.search.value.trim();try{o.classList.remove("hide");const s=await c();d(s)}catch(s){console.log(s.message)}finally{o.classList.add("hide"),console.log()}u.addEventListener("click",async()=>{try{o.classList.remove("hide");const s=await c();d(s),page>S&&L.error({position:"topRight",message:"We`re sorry, but you`ve reached the end of search results."}),o.classList.add("hide")}catch{}finally{o.classList.add("hide"),console.log()}})});async function c(){return page+=1,(await b.get("https://pixabay.com/api/",{params:{key:"41619692-6da96b2a0003032b895baebe3",q:m,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page}})).data}async function d(a){const s=a.hits.reduce((l,{webformatURL:i,largeImageURL:e,tags:t,likes:r,views:f,comments:g,downloads:y})=>l+`<li class='gallery-item'>
              <a class='gallery-link' href='${e}'>
                <img
                    class='gallery-image'
                    src='${i}'
                    alt='${t}'
                    width='360'
                    height='200'
                    />
              </a>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${r}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${f}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${g}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${y}</span></p></li>
              </ul>
            </li>`,"");v.insertAdjacentHTML("beforeend",s),w.refresh(),u.classList.remove("hide")}
//# sourceMappingURL=commonHelpers.js.map
