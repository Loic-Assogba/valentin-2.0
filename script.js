window.addEventListener("load", () => {

    alert("🎵 Une douce mélodie t'accompagne sur ce site. ❤️ Clic n'importe où, écoute et lis moi");

    const music = document.getElementById("music");

    music.volume = 0.3; // volume doux

    document.addEventListener("click", () => {
        music.play();
    }, { once: true });

});
const elements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scale-100", "opacity-100");
        }
    });
}, {
    threshold: 0.3
});

elements.forEach(el => observer.observe(el));

