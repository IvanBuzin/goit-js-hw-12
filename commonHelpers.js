import{S,i as m,a as q}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),f=document.querySelector(".gallery"),c=document.querySelector(".loader"),a=document.querySelector(".more-results"),k=new S(".gallery a",{captionsData:"alt",captionDelay:250}),d=40;let o=1,p="";u.addEventListener("submit",$);a.addEventListener("click",C);async function $(r){r.preventDefault(),a.classList.add("hide"),f.innerHTML="",o=1,p=u.search.value.trim();const s=await fetchImages();s.hits.length===0&&m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#fff"}),renderImages(s)}async function C(){a.classList.add("hide");const r=await s();c.classList.add("hide"),a.classList.remove("hide"),o>=Math.ceil(r.totalHits/d)&&(a.classList.add("hide"),m.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#fff"})),l(r),n();async function s(){c.classList.remove("hide"),o+=1;try{return(await q.get("https://pixabay.com/api/",{params:{key:"41619692-6da96b2a0003032b895baebe3",q:p,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:o}})).data}catch(e){console.log(e.message)}finally{c.classList.add("hide"),u.reset()}}async function l(e){const t=e.hits.reduce((i,{webformatURL:h,largeImageURL:g,tags:y,likes:L,views:b,comments:v,downloads:w})=>i+`<li class='gallery-item'>
              <a class='gallery-link' href='${g}'>
                <img
                    class='gallery-image'
                    src='${h}'
                    alt='${y}'
                    width='360'
                    height='200'
                    />
              </a>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${L}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${b}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${v}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${w}</span></p></li>
              </ul>
            </li>`,"");f.insertAdjacentHTML("beforeend",t),k.refresh(),e.hits.length===0||o>=Math.ceil(e.totalHits/d)?a.classList.add("hide"):a.classList.remove("hide")}function n(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smoth"})}}
//# sourceMappingURL=commonHelpers.js.map
