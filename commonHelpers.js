import{S as g,i as L}from"./assets/vendor-46aac873.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),i=document.querySelector(".gallery"),p=document.querySelector(".loader"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",P);function P(r){r.preventDefault(),i.innerHTML="";const a=l.search.value.trim(),o=new URL("https://pixabay.com/api/");o.searchParams.append("key","41619692-6da96b2a0003032b895baebe3"),o.searchParams.append("q",a),o.searchParams.append("image_type","photo"),o.searchParams.append("orientation","horizontal"),o.searchParams.append("safesearch",!0),p.classList.remove("hide"),fetch(o).then(s=>{if(!s.ok)throw new Error("Your request is not ok!");return p.classList.add("hide"),s.json()}).then(s=>{s.hits.length===0&&L.error({title:"Nothing found!",message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML="",i.innerHTML=s.hits.reduce((e,{webformatURL:t,largeImageURL:n,tags:u,likes:h,views:m,comments:f,downloads:y})=>e+`<li class='gallery-item'>
              <a class='gallery-link' href='${n}'>
                <img
                    class='gallery-image'
                    src='${t}'
                    alt='${u}'
                    width='360'
                    height='200'
                    />
              </a>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${h}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${m}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${f}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${y}</span></p></li>
              </ul>
            </li>`,""),b.refresh()}).catch(s=>console.log(s)).finally(()=>l.reset())}const d=document.querySelector(".btn"),$=document.querySelector(".posts");let c=1,w=10;d.addEventListener("click",async()=>{try{const r=await S();q(r),c+=1,c>1&&(d.textContent="Fetch more posts")}catch(r){console.log(r)}});async function S(){const r=new URLSearchParams({_limit:w,_page:c});return(await axios.get(`https://jsonplaceholder.typicode.com/posts?${r}`)).data}function q(r){const a=r.map(({id:o,title:s,body:e,userId:t})=>`<li>
          <h2 class="post-title">${s.slice(0,30)}</h2>
          <p><b>Post id</b>: ${o}</p>
          <p><b>Author id</b>: ${t}</p>
          <p class="post-body">${e}</p>
        </li>`).join("");$.insertAdjacentHTML("beforeend",a)}
//# sourceMappingURL=commonHelpers.js.map
