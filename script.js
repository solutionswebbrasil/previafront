function toggleMenu() {
    const menu = document.getElementById('category-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

// Example of categories, you can customize these
const categories = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'];
const categoryMenu = document.getElementById('category-menu');

categories.forEach(category => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = category;
    categoryMenu.appendChild(link);
});
