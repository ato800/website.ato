document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Coba putar otomatis (beberapa browser memerlukan interaksi user)
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Jika autoplay dicegah, tampilkan tombol untuk play
            let playButton = document.createElement("button");
            playButton.innerText = "Play Music";
            playButton.style.position = "fixed";
            playButton.style.bottom = "5px";
            playButton.style.right = "5px";
            playButton.style.padding = "5px 10px";
            playButton.style.background = "#3498db";
            playButton.style.color = "#fff";
            playButton.style.border = "none";
            playButton.style.borderRadius = "5px";
            playButton.style.cursor = "pointer";

            document.body.appendChild(playButton);

            playButton.addEventListener("click", function () {
                audio.play();
                playButton.remove(); // Hapus tombol setelah audio diputar
            });
        });
    }
});