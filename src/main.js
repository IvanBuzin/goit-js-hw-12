import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const modal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', toRenderImages);

function toRenderImages(event) {
  event.preventDefault();
  gallery.innerHTML = '';

  const userSearch = form.search.value.trim();

  const url = new URL('https://pixabay.com/api/');
  url.searchParams.append('key', '41619692-6da96b2a0003032b895baebe3');
  url.searchParams.append('q', userSearch);
  url.searchParams.append('image_type', 'photo');
  url.searchParams.append('orientation', 'horizontal');
  url.searchParams.append('safesearch', true);

  loader.classList.remove('hide');

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Your request is not ok!');
      }
      loader.classList.add('hide');
      return response.json();
    })
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          title: 'Nothing found!',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      gallery.innerHTML = '';
      gallery.innerHTML = images.hits.reduce(
        (
          html,
          {
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
          }
        ) =>
          html +
          `<li class='gallery-item'>
              <a class='gallery-link' href='${largeImageURL}'>
                <img
                    class='gallery-image'
                    src='${webformatURL}'
                    alt='${tags}'
                    width='360'
                    height='200'
                    />
              </a>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${likes}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${views}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${comments}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${downloads}</span></p></li>
              </ul>
            </li>`,
        ''
      );

      modal.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => form.reset());
}

const fetchPostsBtn = document.querySelector(".btn");
const postList = document.querySelector(".posts");

// Controls the group number
let page = 1;
// Controls the number of items in the group
let perPage = 10;

fetchPostsBtn.addEventListener("click", async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
    // Increase the group number
    page += 1;

    // Replace button text after first request
    if (page > 1) {
      fetchPostsBtn.textContent = "Fetch more posts";
    }
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  const params = new URLSearchParams({
    _limit: perPage,
    _page: page
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  postList.insertAdjacentHTML("beforeend", markup);
}