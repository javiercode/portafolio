# 🖥️ Retro Desktop Portfolio - Javier Canqui Llusco

Un portafolio interactivo premium de estilo retro y vintage que simula un sistema de escritorio virtual de los años 90. Este proyecto ha sido minuciosamente adaptado, optimizado y personalizado para mostrar la trayectoria profesional, habilidades técnicas, formación académica, referencias y proyectos de **Javier Canqui Llusco** (Senior Software Engineer / Ingeniero de Inteligencia Artificial & Machine Learning).

Puedes explorar, auditar y clonar el código de este proyecto o probarlo en vivo desde su repositorio oficial en:
👉 **[https://github.com/javiercode/portafolio](https://javiercode.github.io/portafolio/)**

---

## 🌟 Características Destacadas (Key Features)

### 🎨 1. Temas Visuales Retro e Interactivos (Theme System)
* Interfaz con estética pixel-art retro configurable sobre múltiples esquemas de colores nostálgicos sincronizados: **Classic Browso**, **Sunset Drive**, **Coastal Shores**, **Alpine Nights** y **Red Dawn**.
* Transiciones fluidas en tiempo real que sincronizan los colores de bordes, sombras, botones e inputs automáticamente utilizando herencia CSS inteligente (`currentColor` y variables).

### 🌐 2. Motor de Traducción Bilingüe Robusto (Bilingual Engine)
* Internacionalización completa y en tiempo real para **Inglés (EN)** y **Español (ES)**, seleccionable directamente desde el menú superior.
* **Compatibilidad Offline Inteligente**: El motor asíncrono descarga los archivos JSON de traducción de forma dinámica desde `public/i18n/`, pero cuenta con diccionarios de respaldo (*fallbacks*) integrados de manera estática en JavaScript. Si el portafolio se ejecuta de forma offline (abriendo el archivo localmente con doble clic mediante el protocolo `file://`), el sistema continúa traduciendo de forma impecable sin lanzar errores de red.

### 💬 3. Asistente Conversacional IA (Chatbot Virtual)
* Diálogo interactivo e interactivo simulado con la IA virtual de Javier. Los usuarios pueden hacer preguntas preconfiguradas sobre su experiencia, liderazgo ágil, habilidades de IA/ML, tecnologías dominadas y disponibilidad de trabajo, obteniendo respuestas formateadas dinámicamente según el idioma activo de la página.

### ✉️ 4. Formulario de Contacto Unificado y Responsivo (Contact Forms)
* Módulo de contacto interactivo accesible desde la carpeta "Contact" del escritorio o desde el botón de acción flotante derecho.
* Permite rellenar Nombre, Correo y Mensaje de manera segura, con campos completamente adaptables al contraste de cualquier color de fondo.
* El usuario puede compilar un correo formateado listo para enviar (**Enviar Correo Directo** vía `mailto:`) o abrir un chat privado con un mensaje sanitizado (**Enviar por WhatsApp** vía `wa.me`).

### 🎵 5. Reproductor de Música Browsamp
* Reproductor retro integrado con Soundcloud que muestra artista y canción de forma dinámica, coordinado con un ecualizador / visualizador gráfico animado con físicas de barra realistas.

### 🕹️ 6. Videojuego Retro Pong
* Minijuego clásico Pong jugable de forma fluida y responsiva directamente dentro de una ventana de escritorio independiente de estilo arcade.

---

## 🚀 Tecnologías Utilizadas

* **HTML5** semántico y estructurado.
* **CSS3** modular y responsivo con layouts flexibles (`flexbox`, herencia de colores, filtros de desenfoque y capas).
* **JavaScript (ES6+)** asíncrono para lógica de traducción y chatbot.
* **jQuery (3.4.1)** para la gestión y manipulación del sistema de ventanas, arrastre y eventos del DOM.
* **AnimeJS** para la animación realista de visualizadores de audio y transiciones de carga.

---

## 🤝 Agradecimientos y Créditos (Copyright Appreciation)

Queremos expresar un agradecimiento muy especial a **Browso** y a su creador, el talentoso diseñador **Sean Halpin** (diseñador en **Help Scout**), por el concepto original, diseño visual e inspiración estética de esta interfaz de escritorio retro. 

Este portafolio utiliza elementos de diseño basados en su obra original para fines de presentación personal y académica, respetando su autoría y propiedad creativa.
