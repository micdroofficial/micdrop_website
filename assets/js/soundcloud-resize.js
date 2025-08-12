document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById('soundcloud-player');

    window.addEventListener("message", function(e) {
        if (e.origin === "https://w.soundcloud.com" && e.data.height) {
            iframe.style.height = e.data.height + "px";
        }
    }, false);
});