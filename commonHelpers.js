import{S,i as p,a as q}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),f=document.querySelector(".gallery"),c=document.querySelector(".loader"),a=document.querySelector(".more-results"),$=new S(".gallery a",{captionsData:"alt",captionDelay:250}),d=40;let i=1,g="";u.addEventListener("submit",k);a.addEventListener("click",C);async function k(r){r.preventDefault(),a.classList.add("hide"),f.innerHTML="",i=1,g=u.search.value.trim();const s=await fetchImages();s.hits.length===0&&p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#fff"}),renderImages(s)}async function C(){a.classList.add("hide");const r=await s();c.classList.add("hide"),a.classList.remove("hide"),i>=Math.ceil(r.totalHits/d)&&(a.classList.add("hide"),p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#fff"})),n(r),l();async function s(){c.classList.remove("hide"),i+=1;try{return(await q.get("https://pixabay.com/api/",{params:{key:"41619692-6da96b2a0003032b895baebe3",q:g,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:i}})).data}catch(e){console.log(e.message)}finally{c.classList.add("hide"),u.reset()}}async function n(e){const t=e.hits.reduce((o,{webformatURL:h,largeImageURL:y,tags:m,likes:L,views:b,comments:v,downloads:w})=>o+`<li class='gallery-item'>
              <a class='gallery-link' href='${y}'>
                <img
                    class='gallery-image'
                    src='${h}'
                    alt='${m}'
                    width='360'
                    height='200'
                    />
              </a>
              <p class='gallery-tags'>Tags: ${m}</p>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${L}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${b}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${v}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${w}</span></p></li>
              </ul>
            </li>`,"");f.insertAdjacentHTML("beforeend",t),$.refresh(),e.hits.length===0||i>=Math.ceil(e.totalHits/d)?a.classList.add("hide"):a.classList.remove("hide")}function l(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
