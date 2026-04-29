# Trabajo Práctico Grupal 1 - Proyecto Web en Equipo

**Link a Vercel:** [pendiente]

## Descripción del Proyecto
Este trabajo práctico consiste en el desarrollo de un sitio web colaborativo que funciona como presentación del equipo. El objetivo es aplicar buenas prácticas de maquetación, diseño adaptable y manipulación del DOM mediante JavaScript. Incluye una portada con navegación, tarjetas individuales de cada integrante con información personal y gustos, y una bitácora de desarrollo. Cada página individual cuenta con al menos una función dinámica en JavaScript que modifica el contenido de la tarjeta.

## Integrantes
1. Andrea Duran - [Link a GitHub](https://github.com/andreaduran1)
2. Beatriz Gonzalez - [Link a GitHub](https://github.com/EBetGonzalez)
3. Marcela Roig - [Link a GitHub](https://github.com/roigmar)

## Tecnologías Utilizadas
1. HTML5 para la estructura semántica.
2. CSS3 (Flexbox/Grid) para el diseño adaptable.
3. JavaScript Vanilla para la interactividad dinámica.
4. Google Fonts para tipografías personalizadas.
5. Vercel para el despliegue continuo.

## Estructura de Archivos
El proyecto mantiene los archivos HTML en la raíz para facilitar el acceso y la navegación. Los estilos se centralizan en la carpeta `/css`, la lógica de programación en `/js` y todos los recursos visuales en `/img`. La carpeta `/img` incluye subcarpetas para organizar imágenes por integrante.

## Guía de Estilos
1. **Paleta de Colores**: Fondo principal [#000000], Textos [#FFFFFF], Acentos [#000000]. Colores adicionales incluyen rojos, rosas y violetas para elementos decorativos.
2. **Tipografías**: [Bangers](https://fonts.google.com/specimen/Bangers) para títulos y [Comic Neue](https://fonts.google.com/specimen/Comic+Neue) para el cuerpo (vínculos de Google Fonts incluidos en el CSS).
3. **Iconografía**: No se utilizó una librería externa; se generaron avatares e ilustraciones mediante IA para preservar la privacidad de los integrantes. Las imágenes fueron creadas con Nano Banana AI utilizando prompts específicos para estilos caricaturescos y temáticos relacionados con IT y AI.

## JavaScript
1. **Portada (index.html)**:
   - `toggleListaIntegrantes`: muestra/oculta la lista de integrantes al hacer clic en el botón, ubicada en `js/index.js`.
   - `LogoSplash animado`: al cargar la página se muestra un splash screen con el logo, se bloquea el scroll y luego desaparece con animación.
2. **Páginas Individuales**:
   - **Marcela Roig (marcela.html)**: `toggleDesafio` muestra/oculta el desafío interactivo y los resultados. Cada botón de opción valida si la respuesta es correcta o incorrecta y actualiza el mensaje visible. Esta función está en `js/marcela.js`.
   - **Beatriz Gonzalez (beatriz.html)**: contador de caracteres en el campo de mensaje (`textarea`), un carrusel de información de Photoshop que actualiza texto al pasar el mouse sobre imágenes, y validación visual del formulario que resalta el botón de enviar cuando todos los campos son válidos. Estas funciones están en `js/beatriz.js`.
3. **Bitácora**:
   - **bitacora.html**: botones `+ / −` para mostrar y ocultar descripciones de avance en cada entrada de la bitácora. Este comportamiento se programa en `js/bitacora.js`.
4. **Otras páginas**:
   - **Andrea Duran (andrea.html)**: página de presentación con contenido estático y estilo consistente, sin funciones JavaScript propias adicionales.

### Capturas de Pantalla
- [Captura 1: Portada con lista de integrantes oculta](captura1.png)
- [Captura 2: ](captura2.png)
- [Captura 3: ](captura3.png)

## Enlace al Proyecto Desplegado
[Link a Vercel](pendiente) - Una vez desplegado, este enlace permitirá acceder al sitio web en producción.

## Uso de IA
1. **Herramientas**: Gemini 1.5 Pro y Nano Banana AI.
2. **Imágenes**: Se generaron avatares con Nano Banana AI utilizando prompts como "Convierte la imagen subida en una escena estilizada en 3D al estilo Pixar" y "Transforma esta foto en un avatar de IA único y estilizado", enfocados en capturar personalidad y temas relacionados con IT e AI.
