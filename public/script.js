const navItems = document.querySelectorAll('.nav-items a');

navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'white';
        item.style.color = 'black';
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = 'black';
        item.style.color = 'white';
    });
});