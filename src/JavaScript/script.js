document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const searchBox = document.getElementById('search-box');
    const searchResult = document.getElementById('search-result');
    const showMoreBtn = document.getElementById('show-more-btn');
    const apiKey ='CblOojFE5XJVvapjubE2FIn14JJREhQwsSKEiYX7slA';
    let page = 1;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        searchResult.innerHTML = '';
        searchImages(searchBox.value);
    });

    showMoreBtn.addEventListener('click', () => {
        page++;
        searchImages(searchBox.value);
    });

    function searchImages(query) {
        const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayImages(data.results))
            .catch(error => console.error('Erro ao buscar imagens:', error));
    }

    function displayImages(images) {
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.small;
            imgElement.alt = image.alt_description;
            searchResult.appendChild(imgElement);
            showMoreBtn.style.display = "block";
        });
    }
});
