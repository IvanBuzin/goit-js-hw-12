import{S,i as u,a as q}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),p=document.querySelector(".gallery"),l=document.querySelector(".loader"),a=document.querySelector(".more-results"),k=new S(".gallery a",{captionsData:"alt",captionDelay:250}),c=40;let m=1,f="";d.addEventListener("submit",$);a.addEventListener("click",C);async function $(r){r.preventDefault(),a.classList.add("hide"),p.innerHTML="",m=1,f=d.search.value.trin();const s=await fetchImages();s.hits.length===0&&u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#fff"}),renderImages(s)}async function C(){a.classList.add("hide");const r=await s();l.classList.add("hide"),a.classList.remove("hide"),page>=Math.ceil(r.totalHits/c)&&(a.classList.add("hide"),u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#fff"})),n(r),o();async function s(){l.classList.remove("hide"),page+=1;try{return(await q.get("https://pixabay.com/api/",{params:{key:"41619692-6da96b2a0003032b895baebe3",q:f,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page}})).data}catch(e){console.log(e.message)}finally{l.classList.add("hide"),d.reset()}}async function n(e){const t=e.hits.reduce((i,{webformatURL:g,largeImageURL:h,tags:y,likes:L,views:b,comments:v,downloads:w})=>i+`<li class='gallery-item'>
              <a class='gallery-link' href='${h}'>
                <img
                    class='gallery-image'
                    src='${g}'
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
            </li>`,"");p.insertAdjacentHTML("beforeend",t),k.refresh(),e.hits.length===0||m>=Math.ceil(e.totalHits/c)?a.classList.add("hide"):a.classList.remove("hide")}function o(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smoth"})}}
//# sourceMappingURL=commonHelpers.js.map
