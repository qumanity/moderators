document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const articlesContainer = document.getElementById('articles');

    // Load articles from JSON
    fetch('data/articles.json')
        .then(response => response.json())
        .then(data => {
            data.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.className = 'article';
                articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.description}</p>`;
                articlesContainer.appendChild(articleElement);
            });

            // Add search functionality
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                document.querySelectorAll('.article').forEach(article => {
                    const title = article.querySelector('h2').textContent.toLowerCase();
                    article.style.display = title.includes(query) ? '' : 'none';
                });
            });
        })
        .catch(error => console.error('Error loading articles:', error));
});