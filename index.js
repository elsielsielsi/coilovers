window.onload = () => {
    const tooltip1 = document.getElementById('tooltip1');
    const tooltip2 = document.getElementById('tooltip2');
    let timeoutId = null;
    window.addEventListener('mousemove', () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    
        tooltip1.style.opacity = 1;
        tooltip2.style.opacity = 1;
    
        timeoutId = setTimeout(() => {
            tooltip1.style.opacity = 0;
            tooltip2.style.opacity = 0;
        }, 500);
    });
}
