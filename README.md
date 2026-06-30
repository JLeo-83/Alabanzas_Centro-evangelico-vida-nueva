# Letras y Alabanzas - Centro Evangélico Vida Nueva

Plataforma web independiente y no oficial diseñada como herramienta de apoyo para el aprendizaje, ensayo y devoción en el hogar. Este espacio recopila las letras y recursos multimedia de las alabanzas pertenecientes a la congregación del **Centro Evangélico Vida Nueva**.

---

## ✨ Características de la Aplicación

* **Diseño Responsivo e Interactivo:** Interfaz adaptada para dispositivos móviles y de escritorio, optimizada para una lectura cómoda durante la adoración.
* **Buscador Integrado:** Barra de búsqueda dinámica (`#search-input`) para localizar alabanzas de forma rápida.
* **Control de Temas (Modo Claro / Oscuro):** Alternancia de estilos visuales mediante un botón interactivo (`#theme-toggle-btn`) que conmuta dinámicamente entre recursos e imágenes claras y oscuras.
* **Sección de Versículos Dinámicos:** Despliegue automatizado de textos bíblicos para el fortalecimiento espiritual diario.
* **Catálogo Organizado:** Grid interactivo para alabanzas recomendadas y acceso a la lista completa del repertorio.
* **Conectividad Oficial:** Enlaces integrados a las plataformas y redes oficiales de la iglesia (Sitio Web, YouTube, Facebook, Instagram, Spotify, Correo, Teléfono y Ubicación en Google Maps).

---

## 🛠️ Arquitectura y Estructura del Proyecto

La aplicación se divide de forma modular en archivos de código limpio y desacoplado para facilitar el mantenimiento:

* **`index.html`:** Estructura semántica principal de la página de inicio.
* **`style.css`:** Hojas de estilo que manejan el diseño visual, espaciados y variables de la interfaz.
* **`theme.js`:** Lógica encargada de gestionar el estado del modo oscuro y el intercambio de logotipos.
* **`songs.js` / `canciones.js`:** Base de datos estructurada en objetos JavaScript que almacena los IDs de videos, títulos, imágenes y arreglos de letras.
* **`verses.js`:** Módulo encargado de proveer los versículos bíblicos de manera dinámica.
* **`script.js`:** Controlador principal de la aplicación que gestiona eventos, búsquedas y el renderizado en el DOM.

---

## Formato de Datos de las Alabanzas

Cada alabanza se registra como un objeto estructurado dentro del arreglo de canciones:

```javascript
{
  id: "nombre-de-la-cancion",
  titulo: "Título de la Alabanza",
  artista: "Centro Evangélico Vida Nueva",
  imagenDark: "assets/logo-icon-dark.png",
  imagenLight: "assets/logo-icon-light.png",
  video: "ID_VIDEO_YOUTUBE",
  tipoVideo: "youtube",
  letra: [
    [
      "Estrofa de ejemplo"
    ]
  ]
}
---

## Créditos y Propósito

* **Desarrollado por:** Leinto © 2026
* **Enfoque del Proyecto:** Herramienta independiente creada por un miembro de la congregación.
* **Propósito:** Todo el contenido lírico y multimedia se comparte exclusivamente con fines de comunión, edificación espiritual y adoración.
* **Página oficial:**https://mividanueva.org/