import{S as h,i as L,a as b}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const n=document.querySelector(".form"),v=document.querySelector(".gallery"),i=document.querySelector(".loader"),p=document.querySelector(".more-results"),w=new h(".gallery a",{captionsData:"alt",captionDelay:250}),u=40,S=Math.ceil(500/u);let m="";n.addEventListener("submit",async o=>{o.preventDefault(),m=n.search.value.trim();try{i.classList.remove("hide");const s=await c();d(s)}catch(s){console.log(s.message)}finally{i.classList.add("hide"),console.log()}p.addEventListener("click",async s=>{try{i.classList.remove("hide");const a=await c();d(a),page>S&&L.error({position:"topRight",message:"We`re sorry, there are no more posts to load"}),i.classList.add("hide")}catch(a){console.log(a.message)}finally{i.classList.add("hide"),console.log()}})});async function c(){return page+=1,(await b.get("https://pixabay.com/api/",{params:{key:"41619692-6da96b2a0003032b895baebe3",q:m,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page}})).data}async function d(o){const s=o.hits.reduce((a,{webformatURL:l,largeImageURL:e,tags:t,likes:r,views:g,comments:f,downloads:y})=>a+`<li class='gallery-item'>
              <a class='gallery-link' href='${e}'>
                <img
                    class='gallery-image'
                    src='${l}'
                    alt='${t}'
                    width='360'
                    height='200'
                    />
              </a>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${r}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${g}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${f}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${y}</span></p></li>
              </ul>
            </li>`,"");v.insertAdjacentHTML("beforeend",s),w.refresh(),p.classList.remove("hide")}
//# sourceMappingURL=commonHelpers.js.map
