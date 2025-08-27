// utmifyPixel.js
(function() {
  // ID do pixel UTMify
  window.pixelId = "68a03b7207ba3fa84498a661";

  // Função que carrega os scripts da UTMify
  function loadUtmifyPixel() {
    // Cria e adiciona pixel.js
    const pixelScript = document.createElement("script");
    pixelScript.async = true;
    pixelScript.defer = true;
    pixelScript.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
    document.head.appendChild(pixelScript);

    // Cria e adiciona latest.js
    const latestScript = document.createElement("script");
    latestScript.async = true;
    latestScript.defer = true;
    latestScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
    latestScript.setAttribute("data-utmify-prevent-xcod-sck", "");
    latestScript.setAttribute("data-utmify-prevent-subids", "");
    document.head.appendChild(latestScript);

    // Inicializa o pixel quando latest.js estiver pronto
    latestScript.onload = function() {
      if (window.Utmify && window.Utmify.initPixel) {
        window.Utmify.initPixel(window.pixelId);
      } else {
        console.error("Utmify não está disponível");
      }
    };
  }

  // Espera a página carregar antes de executar
  if (document.readyState === "complete") {
    loadUtmifyPixel();
  } else {
    window.addEventListener("load", loadUtmifyPixel);
  }
})();
