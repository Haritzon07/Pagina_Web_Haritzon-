document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchItems = document.getElementById('searchItems');
    const originalItems = Array.from(searchItems.children);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredItems = originalItems.filter(item => 
            item.textContent.toLowerCase().includes(searchTerm)
        );

        searchItems.innerHTML = '';
        filteredItems.forEach(item => searchItems.appendChild(item.cloneNode(true)));

        if (filteredItems.length === 0) {
            const noResults = document.createElement('div');
            noResults.textContent = 'No se encontraron resultados';
            noResults.className = 'search-item';
            searchItems.appendChild(noResults);
        }
    });
});