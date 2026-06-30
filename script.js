/* ============================================================
   script.js — Lógica de renderizado del sitio
   Centro Evangélico Vida Nueva
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  renderRecommended();
  renderAllSongs();
  renderLyricsPage();
  renderVerses();
  wireSearch();
  wireViewToggle();
  wirePresentMode();
});

/* ---------- Genera el HTML de una tarjeta de canción ---------- */
function buildSongCard(song) {
  const theme = document.documentElement.getAttribute("data-theme") || "dark";
  const card = document.createElement("a");
  card.href = "letra.html?id=" + encodeURIComponent(song.id);
  card.className = "song-card";

  card.innerHTML =
    '<div class="song-card-avatar">' +
    '<img class="logo-icon-img" src="' + (theme === "dark" ? song.imagenDark : song.imagenLight) + '" ' +
    'data-logo-dark="' + song.imagenDark + '" data-logo-light="' + song.imagenLight + '" ' +
    'alt="' + escapeHtml(song.artista) + '">' +
    "</div>" +
    '<div class="song-card-info">' +
    '<div class="song-card-title">' + escapeHtml(song.titulo) + "</div>" +
    '<div class="song-card-artist">' + escapeHtml(song.artista) + "</div>" +
    "</div>";

  return card;
}

/* ---------- Home: canciones recomendadas ---------- */
function renderRecommended() {
  const grid = document.getElementById("recommended-grid");
  if (!grid || typeof SONGS === "undefined") return;

  SONGS.filter(function (song) {
    return song.recomendada === true;
  }).forEach(function (song) {
    grid.appendChild(buildSongCard(song));
  });
}

/* ---------- Página de lista completa de canciones ---------- */
function renderAllSongs() {
  const grid = document.getElementById("all-songs-grid");
  if (!grid || typeof SONGS === "undefined") return;

  SONGS.forEach(function (song) {
    grid.appendChild(buildSongCard(song));
  });
}

/* ---------- Alterna entre vista de cuadrícula y vista de lista ---------- */
function wireViewToggle() {
  const btn = document.getElementById("view-toggle-btn");
  const icon = document.getElementById("view-toggle-icon");
  const grid = document.getElementById("all-songs-grid");
  if (!btn || !grid) return;

  btn.addEventListener("click", function () {
    const isList = grid.classList.toggle("view-list");
    if (icon) {
      icon.className = isList ? "fa-solid fa-border-all" : "fa-solid fa-bars";
    }
  });
}

/* ---------- Modo proyección: pantalla limpia con letra grande ---------- */
function wirePresentMode() {
  const enterBtn = document.getElementById("present-mode-btn");
  const exitBtn = document.getElementById("exit-present-btn");
  if (!enterBtn) return;

  enterBtn.addEventListener("click", function () {
    document.body.classList.add("presenting");
  });

  if (exitBtn) {
    exitBtn.addEventListener("click", function () {
      document.body.classList.remove("presenting");
    });
  }

  // Tecla Escape también sale del modo proyección
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.body.classList.remove("presenting");
    }
  });
}

/* ---------- Página de letra individual ---------- */
function renderLyricsPage() {
  const container = document.getElementById("lyrics-content");
  if (!container || typeof SONGS === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const song = SONGS.find(function (s) { return s.id === id; }) || SONGS[0];

  if (!song) {
    container.innerHTML = "<p>No se encontró la canción solicitada.</p>";
    return;
  }

  document.getElementById("page-title").textContent =
    song.titulo + " - " + song.artista + " | Centro Evangélico Vida Nueva";

  const stanzasHtml = song.letra
    .map(function (stanza) {
      return (
        '<p class="lyrics-stanza">' +
        stanza.map(escapeHtml).join("<br>") +
        "</p>"
      );
    })
    .join("");

  container.innerHTML =
    '<div class="lyrics-header">' +
    '<div class="lyrics-header-avatar">' +
    '<img class="logo-icon-img" src="' + currentThemeImage(song) + '" ' +
    'data-logo-dark="' + song.imagenDark + '" data-logo-light="' + song.imagenLight + '" ' +
    'alt="' + escapeHtml(song.artista) + '">' +
    "</div>" +
    "<div>" +
    "<h1>" + escapeHtml(song.titulo) + "</h1>" +
    '<div class="artist-link">' + escapeHtml(song.artista) + "</div>" +
    "</div>" +
    "</div>" +
    '<div class="lyrics-body-wrap">' +
    '<div class="lyrics-text">' + stanzasHtml +
    '<button class="copy-lyrics-btn" id="copy-lyrics-btn">' +
    '<i class="fa-solid fa-copy"></i> Copiar letra' +
    "</button>" +
    "</div>" +
    '<div class="video-embed-wrap">' +
    buildVideoPlayer(song) +
    "</div>" +
    "</div>";

  wireCopyLyrics(song);
}

/* ---------- Copia la letra completa al portapapeles ---------- */
function wireCopyLyrics(song) {
  const btn = document.getElementById("copy-lyrics-btn");
  if (!btn) return;

  btn.addEventListener("click", function () {
    const texto = song.letra.map(function (estrofa) {
      return estrofa.join("\n");
    }).join("\n\n");

    navigator.clipboard.writeText(texto).then(function () {
      btn.classList.add("copied");
      btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
      setTimeout(function () {
        btn.classList.remove("copied");
        btn.innerHTML = '<i class="fa-solid fa-copy"></i> Copiar letra';
      }, 2000);
    });
  });
}

/* ---------- Genera el reproductor según el tipo de video ---------- */
function buildVideoPlayer(song) {
  if (song.tipoVideo === "local") {
    const inicio = song.inicioSegundos || 0;
    const poster = song.poster || "";
    return `
    <div class="custom-player" id="player-${escapeHtml(song.id)}">
      <img class="custom-player-poster" src="${poster}" alt="${escapeHtml(song.titulo)}">
      <audio id="audio-${escapeHtml(song.id)}" src="${song.video}#t=${inicio}"></audio>
      <div class="custom-player-controls">
        <button class="custom-play-btn" onclick="togglePlay('${escapeHtml(song.id)}')">▶</button>
        <span class="custom-time" id="time-${escapeHtml(song.id)}">0:00 / 0:00</span>
        <input class="custom-progress" type="range" value="0" min="0" max="100" step="0.1"
          oninput="seekAudio('${escapeHtml(song.id)}', this.value)">
        <button class="custom-vol-btn" onclick="toggleMute('${escapeHtml(song.id)}')">🔊</button>
      </div>
    </div>`;
  } else {
    // YouTube embed
    return '<iframe src="https://www.youtube.com/embed/' +
      encodeURIComponent(song.video) +
      '?modestbranding=1&rel=0&iv_load_policy=3' +
      buildYoutubeParams(song) + '" ' +
      'title="' + escapeHtml(song.titulo) + '" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
      "allowfullscreen></iframe>";
  }
}

function togglePlay(id) {
  const audio = document.getElementById("audio-" + id);
  const btn = document.querySelector("#player-" + id + " .custom-play-btn");
  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸";
  } else {
    audio.pause();
    btn.textContent = "▶";
  }
}

function seekAudio(id, value) {
  const audio = document.getElementById("audio-" + id);
  audio.currentTime = (value / 100) * audio.duration;
}

function toggleMute(id) {
  const audio = document.getElementById("audio-" + id);
  const btn = document.querySelector("#player-" + id + " .custom-vol-btn");
  audio.muted = !audio.muted;
  btn.textContent = audio.muted ? "🔇" : "🔊";
}

// Actualiza la barra de progreso y el tiempo en vivo
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("timeupdate", function (e) {
    if (e.target.tagName !== "AUDIO") return;
    const id = e.target.id.replace("audio-", "");
    const progress = document.querySelector("#player-" + id + " .custom-progress");
    const time = document.getElementById("time-" + id);
    if (progress && !isNaN(e.target.duration)) {
      progress.value = (e.target.currentTime / e.target.duration) * 100;
      time.textContent = formatTime(e.target.currentTime) + " / " + formatTime(e.target.duration);
    }
  }, true);
});

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, "0");
  return m + ":" + s;
}

/* ---------- Parámetros opcionales de inicio/fin para YouTube ---------- */
function buildYoutubeParams(song) {
  const params = [];
  if (song.inicioSegundos) params.push("start=" + song.inicioSegundos);
  if (song.finSegundos) params.push("end=" + song.finSegundos);
  return params.length ? "&" + params.join("&") : "";
}

/* ---------- Imagen según tema ---------- */
function currentThemeImage(song) {
  const theme = document.documentElement.getAttribute("data-theme") || "dark";
  return theme === "dark" ? song.imagenDark : song.imagenLight;
}

/* ---------- Buscador ---------- */
function wireSearch() {
  const input = document.getElementById("search-input");
  const btn = document.getElementById("search-btn");
  const bar = document.querySelector(".search-bar");
  if (!input) return;

  if (btn && bar) {
    btn.addEventListener("click", function (e) {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile && !bar.classList.contains("search-open")) {
        e.preventDefault();
        bar.classList.add("search-open");
        input.focus();
        return;
      }
      goSearch();
    });
  }

  function goSearch() {
    const query = input.value.trim();
    const url = "canciones.html" + (query ? "?q=" + encodeURIComponent(query) : "");
    window.location.href = url;
  }

  if (window.location.pathname.endsWith("canciones.html")) {
    input.addEventListener("input", function () {
      filterSongGrid(input.value.trim().toLowerCase());
    });
  } else {
    let debounceTimer;
    input.addEventListener("input", function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(goSearch, 500);
    });
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") goSearch();
  });

  if (window.location.pathname.endsWith("canciones.html")) {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) {
      input.value = q;
      filterSongGrid(q.toLowerCase());
    }
  }
}

/* ---------- Filtro de grid de canciones (título, artista y letra) ---------- */
function filterSongGrid(query) {
  const grid = document.getElementById("all-songs-grid");
  if (!grid || typeof SONGS === "undefined") return;

  Array.from(grid.children).forEach(function (card) {
    const href = card.getAttribute("href") || "";
    const idMatch = href.match(/id=([^&]+)/);
    const id = idMatch ? decodeURIComponent(idMatch[1]) : null;
    const song = SONGS.find(function (s) { return s.id === id; });

    let matches = card.textContent.toLowerCase().includes(query);

    if (!matches && song && song.letra) {
      const letraCompleta = song.letra.flat().join(" ").toLowerCase();
      matches = letraCompleta.includes(query);
    }

    card.style.display = matches ? "" : "none";
  });
}

/* ---------- Escape HTML ---------- */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Versículos bíblicos ---------- */
function renderVerses() {
  const list = document.getElementById("verses-list");
  if (!list || typeof VERSES === "undefined") return;

  VERSES.slice(0, 4).forEach(function (verse) {
    const li = document.createElement("li");
    li.className = "verse-card";
    li.innerHTML =
      '<p class="verse-text">"' + escapeHtml(verse.texto) + '"</p>' +
      '<span class="verse-ref">' + escapeHtml(verse.referencia) + "</span>";
    list.appendChild(li);
  });
}