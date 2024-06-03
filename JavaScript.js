document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.info').style.transform = 'translateY(0)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.info').style.transform = 'translateY(100%)';
        });
    });
});
