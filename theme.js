/* ============================================================
   theme.js — Modo oscuro / claro
   Se guarda la preferencia en memoria para toda la sesión y
   también en localStorage para que persista al recargar.
   ============================================================ */

(function () {
  const STORAGE_KEY = "vidanueva-theme";

  function getPreferredTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {
      /* localStorage no disponible, seguimos con el default */
    }
    return "dark";
  }

  function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("theme-toggle-btn");
  if (btn) {
    btn.textContent = theme === "dark" ? "☾" : "☀";
    btn.setAttribute(
      "aria-label",
      theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
    );
  }
  swapThemedLogos(theme);   // <-- AGREGA ESTA LÍNEA
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (e) {}
}

// AGREGA ESTA FUNCIÓN NUEVA (debajo de applyTheme, por ejemplo)
function swapThemedLogos(theme) {
  const imgs = document.querySelectorAll("img[data-logo-dark][data-logo-light]");
  imgs.forEach(function (img) {
    const target = theme === "dark"
      ? img.getAttribute("data-logo-dark")
      : img.getAttribute("data-logo-light");
    if (target && img.getAttribute("src") !== target) {
      img.setAttribute("src", target);
    }
  });
}

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  }

  // Aplicar el tema lo antes posible para evitar parpadeo
  applyTheme(getPreferredTheme());

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(getPreferredTheme());
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      btn.addEventListener("click", toggleTheme);
    }
  });
  
})();
