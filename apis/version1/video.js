"use strict";

const videoUpload = document.getElementById("videoUpload");
function selectVideo(event) {
  const file = event.target.files[0];
  //Si el navegador soporta las apis hace...
  if (window.File && window.FileReader && window.FileList) {
    const errorMessage = document.getElementById("errorMessage");
    const loadingMessage = document.getElementById("loadingMessage");
    const video = document.getElementById("video");
    // Aparece mensaje de error si el archivo no es de tipo video
    if (!file.type.match("video.*")) {
      errorMessage.innerHTML = `<p class="error">Error! El tipo de archivo subido no es de tipo video. Pruebe a subir de nuevo!</p>`;
      video.src = "";
    } else {
      errorMessage.innerHTML = "";
      const reader = new FileReader();
      //Cargandose el archivo...
      reader.addEventListener("progress", () => {
        loadingMessage.innerHTML = `<div class="loading"><span class="loader"></span><p>Cargando...</p></div>`;
      });
      //Al cargarse el archivo...
      reader.addEventListener("load", () => {
        const buttons = document.querySelector(".buttons");
        loadingMessage.innerHTML = "";
        video.src = reader.result;
        buttons.style.display = "block";
        videoButtons();
      });

      reader.readAsDataURL(file);
    }
  } else {
    alert("Tu navegador no soporta las APIS!");
  }
}

function videoButtons() {
  const video = document.getElementById("video");
  document.getElementById("play").addEventListener("click", () => {
    video.play();
  });

  document.getElementById("pause").addEventListener("click", () => {
    video.pause();
  });

  document.getElementById("upVolume").addEventListener("click", () => {
    if (video.volume < 1) {
      video.volume += 0.1;
    }
  });

  document.getElementById("downVolume").addEventListener("click", () => {
    if (video.volume >= 0.1) {
      video.volume -= 0.1;
    }
  });
}
videoUpload.addEventListener("change", selectVideo);
