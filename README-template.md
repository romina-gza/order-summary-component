# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](./design/my-screenshot.PNG)

### Links

- Solution URL: [GitHub Repository here!](https://github.com/romina-gza/order-summary-component)
- Live Site URL: [Live site URL here!](https://your-live-site-url.com](https://htmlpreview.github.io/?https://github.com/romina-gza/order-summary-component/blob/master/public/index.html)

## My process

### Built with

- Semantic HTML5 markup
- [Tailwindcss](https://tailwindcss.com)

### What I learned

I learned to install tailwindcss, I will let in [Useful resources](#useful-resources) two links of the places that are usefull to me to do the install.

### Continued development

I like tailwind css and i would like continue working with it. It was difficult at first but was funny.

## **Useful resources**
  ## Instalando Tailwind y Orden de Clases

***Fuente: [Kinsta.com](https://kinsta.com/es/blog/tailwind-css/?unapproved=72450&moderation-hash=da7e00126906f3e1f1557e50acc192a6#comment-72450)***

## **Cómo empezar a utilizar Tailwind CSS**

Antes de instalar Tailwind CSS e integrarlo en tu proyecto, asegúrate de que

1. Tienes [Node.js instalado en tu ordenador](https://kinsta.com/es/blog/como-instalar-node-js/) para poder utilizar el [gestor de paquetes de Node (npm)](https://kinsta.com/es/base-de-conocimiento/que-es-node-js/#what-is-npm) en el terminal.
2. Tu proyecto está listo con los archivos creados.

Este es el aspecto de la estructura de nuestro proyecto en este momento:

```
-Tailwind-tutorial
    -public
        -index.html
        -styles.css
    -src
        -styles.css
```

A continuación, inicia un terminal para tu proyecto y ejecuta los siguientes comandos:

```
    npm install -D tailwindcss
```

El comando anterior instalará el framework CSS Tailwind como dependencia. A continuación, genera tu archivo tailwind.config.js ejecutando el siguiente comando:

```
  //Aclaro, edité esta parte del código porque en la web de Kinsta estaba repetido el código anterior y no era el paso que seguia. 
  //Este codigo de aqui abajo es el correcto. Lo leí en la pagina oficial de Tailwindcss.

   npx tailwindcss init
   
```

El archivo tailwind.config.js estará vacío cuando se cree, así que tendremos que añadir algunas líneas de código:

```
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Las rutas de los archivos proporcionadas en la matriz de contenido permitirán a Tailwind purgar/eliminar cualquier estilo no utilizado durante el tiempo de construcción.

Lo siguiente que hay que hacer es añadir las directivas «@tailwind» a tu archivo CSS en la carpeta **src** – aquí es donde Tailwind genera todos sus estilos de utilidad predefinidos para ti:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Lo último que debes hacer es iniciar el proceso de construcción ejecutando este comando en tu terminal:

```
    npx tailwindcss -i ./src/styles.css -o ./public/styles.css --watch
```

En el código anterior, le estamos diciendo a Tailwind que nuestro archivo de entrada es la hoja de estilos de la carpeta src y que los estilos que hayamos utilizado tienen que incorporarse al archivo de salida de la carpeta public. `--watch` permite a Tailwind vigilar su archivo en busca de cambios para un proceso de construcción automático; **omitirlo significa que tenemos que ejecutar ese script cada vez que queramos construir nuestro código y ver la salida deseada.**

---

## Orden de Clases desde Prettier 

***Fuente: [github.com/tailwindlabs](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)***

Un complemento [Prettier](https://prettier.io/) para Tailwind CSS v3.0+ que **ordena automáticamente las clases según [nuestro orden de clase recomendado](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted) .**

## **Instalación**

Para comenzar, simplemente instálelo `prettier-plugin-tailwindcss`como una dependencia de desarrollo:

```jsx
//usar en git 
npm install -D prettier prettier-plugin-tailwindcss
//Para que corra o "funcione" tienes que hacer clic en el botón derecho del mouse en la hoja de texto (en mi caso html)y pinchar "Format Document" y elegir Prettier, si es que te da la opción, yo lo tengo por default y honestamente no sé porqué jeje. 
```

Este complemento sigue la convención de carga automática de Prettier, por lo que siempre que haya configurado Prettier en su proyecto, comenzará a funcionar automáticamente tan pronto como se instale.
## Author

- Website - [Romina Galarza](https://github.com/romina-gza)
- Frontend Mentor - [@romina-gza](https://www.frontendmentor.io/profile/romina-gza)
