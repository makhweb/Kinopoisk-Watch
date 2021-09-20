const yohohoPlayer = document.getElementById('yohoho');
const playerMessage = document.getElementById('message');

// Prepare player
if (window.location.hash) {
    const id = window.location.hash.replace(/\D/g, '');
    yohohoPlayer.setAttribute('data-kinopoisk', id);
} else {
    yohohoPlayer.remove();
    setTimeout(() => {
        playerMessage.innerText = 'ID фильма не указан';
        playerMessage.style.top = '50%';
        playerMessage.style.opacity = '1';
    }, 100);
}

// Show message
window.onload = () => {
    setTimeout(() => {
        playerMessage.style.top = '50%';
        playerMessage.style.opacity = '1';
    }, 2000);
}