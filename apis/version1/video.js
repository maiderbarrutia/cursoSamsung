"use strict";

function selectVideo(event) {
  const file = event.target.files[0];
  if (window.File && window.FileReader && window.FileList) {
    console.log("soportado");
    //Mira todos los archivos subidos y por cada archivo hace...
    const message = document.querySelector("#messages");
    const video = document.querySelector("#video");
    // Aparece mensaje de error si el archivo no es de tipo video
    if (!file.type.match("video.*")) {
      message.innerHTML = `<p class="error">Error! El tipo de archivo subido no es de video. Pruebe a subir de nuevo!</p>`;
      video.src = "";
    } else {
      message.innerHTML = "";
      const reader = new FileReader();
      //Cargandose el archivo
      reader.addEventListener("progress", () => {
        message.innerHTML = `<p class="loading">Cargando...</p>`;
      });
      //Al subir el archivo...
      reader.addEventListener("load", () => {
        const buttons = document.querySelector(".buttons");
        const loadingMessage = document.querySelector(".loading");
        loadingMessage.style.display = "none";
        video.src = reader.result;
        buttons.style.display = "block";
        videoButtons();
      });

      reader.readAsDataURL(file);
    }
  } else {
    alert("Tu navegador no soporta el archivo subido!");
  }
}

function videoButtons() {
  const video = document.querySelector("#video");
  document.querySelector("#play").addEventListener("click", () => {
    video.play();
  });

  document.querySelector("#pause").addEventListener("click", () => {
    video.pause();
  });

  document.querySelector("#upVolume").addEventListener("click", () => {
    if (video.volume < 1) {
      video.volume += 0.1;
    }
  });

  document.querySelector("#downVolume").addEventListener("click", () => {
    if (video.volume >= 0.1) {
      video.volume -= 0.1;
    }
  });
}
