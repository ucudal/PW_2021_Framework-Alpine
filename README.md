# Alpine 
 
Alpine.js ofrece las propiedades reactivas y declarativas de grandes frameworks como Vue o React con un coste mucho menor. Mantiene el DOM, pudiendo mejorar y perfeccionar el comportamiento como más convenga. 
 
## Plugin 🌲 Spruce 
 
Una capa de gestión de estado global ligera para Alpine.js 
 
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ryangjchandler/spruce?label=version&style=flat-square) 
![Build size Brotli](https://img.badgesize.io/ryangjchandler/spruce/master/dist/spruce.umd.js.svg?compression=gzip&style=flat-square&color=green)
[![Monthly downloads via CDN](https://data.jsdelivr.com/v1/package/gh/ryangjchandler/spruce/badge)](https://www.jsdelivr.com/package/gh/ryangjchandler/spruce) 

> Con el lanzamiento de [Alpine 3.x](https://github.com/alpinejs/alpine-next), Spruce ha sido reemplazado por un asistente de [`$store`](https://alpinejs.dev/magics/store) ayuda, así mismo [`Alpine.store`](https://alpinejs.dev/magics/store). 
Este paquete seguirá siendo compatible con Alpine 2.x, pero solo con las versiones de seguridad ❤️ 

### Documentación 

Para aprender más de Spruce y cómo usarlo, por favor ir a [documentación oficial](https://spruce.ryangjchandler.co.uk). 
 
 
##Plugin Alpine.js devtools   

![Screenshot of Alpine.js devtools](docs/devtools-only.png)  
Alpine.js devtools es una simple extensión para permitirte debuguear [Alpine.js](https://github.com/alpinejs/alpine) componentes fácilmente. 
> Esta extensión está inspirada en  [Vue devtools](https://github.com/vuejs/vue-devtools),pero customizada para Alpine.js . 

### Instalación  

-   [Get the Chrome Extension](https://chrome.google.com/webstore/detail/alpinejs-devtools/fopaemeedckajflibkpifppcankfmbhk) 
-   [Get the Firefox Extension](https://addons.mozilla.org/firefox/addon/alpinejs-devtools/) 

### Identificación de componentes 

A diferencia de otros frameworks, Alpine no incluye  named components. Por eso pordefault, Alpine.js devtools intentara identificar los component names  
de los atributos. 
 
### Pre requisitos 

-   Node ^14.x 
-   npm ^6.x 

### Correr el Alpine.js devtools simulator 
 
A devtools simulator se puede utilizar para correr test y tener un flujo de trabajo. 

## Plugin Magic Helpers 

Una colección de magic properties y helper functions para usar con [Alpine.js](https://github.com/alpinejs/alpine) version 2 

### Funcionalidades 

| Magic Helpers | Descripcion | 
| --- | --- | 
| [`$component/$parent`](#component) | Nativo acceso y actualización de data de otro componente o padre del componente. | 
| [`$fetch/$get/$post`](#fetch) | Usando Axios, fetch JSON desde una fuente externa.  | 
| [`$interval`](#interval) | Correr una función cada n milisegundos.  | 
| [`$range`](#range) | Iterar sobre un rango de valores. | 
| [`$refresh`](#refresh) | Manualmente refrescar un componente. | 
| [`$scroll`](#scroll) | Scroll la pagina verticalmente a una posición especifica | 
| [`$truncate`](#truncate) | Limita un texto String a un número específico de caracteres. | 
| [`$undo`](#undo) | Detectar cambios de estado dentro de tus componentes. | 

## Plugin Alpine.js Test Utils 

Utilidades para testing de componentes Alpine.js . 
**Esta librería te permite escribir rápido y fácil test para Alpine.js  

## Plugin Pinecone Router 

La extensión client-side router para Alpine.js. 

### Compatibilidad 

[Currently works with Alpine.js v2 only](https://github.com/pinecone-router/router/issues/12) 

### Funcionalidades 

Un enrutador del lado del cliente fácil de usar, pero repleto de funciones para usar con Alpine.js. 
Puede ser usado con: 
-   Handle routes & process route variables. 
-   Usar magic helper `$router` ayuda a mostrar elementos dinámicamente  etc. dentro de Alpine.js Components. 
-   muchos más usos [middlewares](#middlewares)!. 

## Comunidad 

* [Alpine.js Weekly - Newsletter](https://alpinejs.codewithhugo.com/newsletter) 
* [Alpine.js Discord Community](https://discord.gg/CGmj5nq) 
* [Alpine.js Matrix Community](https://matrix.to/#/#AlpineJS:matrix.org) 
* [Alpine.js Persian Matrix Community](https://matrix.to/#/#AlpineJS-fa:matrix.org) 