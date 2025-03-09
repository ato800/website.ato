document.addEventListener("DOMContentLoaded", function () {
    let snowflakes = [];
    const numFlakes = 15; // Jumlah salju

    for (let i = 0; i < numFlakes; i++) {
        let flake = document.createElement("div");
        flake.classList.add("snowflake");
        document.body.appendChild(flake);
        snowflakes.push(flake);
    }

    function animateSnow() {
        snowflakes.forEach(flake => {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let size = Math.random() * 5 + 2;
            let duration = Math.random() * 3 + 2;

            flake.style.left = x + "px";
            flake.style.top = y + "px";
            flake.style.width = size + "px";
            flake.style.height = size + "px";
            flake.style.animationDuration = duration + "s";
        });
    }

    animateSnow();
    setInterval(animateSnow, 5000);
});