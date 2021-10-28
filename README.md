# Alpine 
 
Alpine.js ofrece las propiedades reactivas y declarativas de grandes frameworks como Vue o React con un coste mucho menor. Mantiene el DOM, pudiendo mejorar y perfeccionar el comportamiento como más convenga. 
 
## Plugin 🌲 Spruce 
 
Una capa de gestión de estado global ligera para Alpine.js 
  
### Documentación 

Para aprender más de Spruce y cómo usarlo, por favor ir a [documentación oficial](https://spruce.ryangjchandler.co.uk). 
 
## Plugin Alpine.js devtools   

Alpine.js devtools es una simple extensión para permitirte debuguear Alpine js componentes fácilmente. 
  
### Identificación de componentes 

A diferencia de otros frameworks, Alpine no incluye  named components. Por eso por default, Alpine js devtools intentara identificar los component names  
de los atributos. 
 
### Pre requisitos 

-   Node ^14.x 
-   npm ^6.x 

### Correr el Alpine.js devtools simulator 
 
A devtools simulator se puede utilizar para correr test y tener un flujo de trabajo. 

## Plugin Magic Helpers 

Una colección de magic properties y helper functions para usar con Alpine JS version 2 

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
 
### Funcionalidades 

Un enrutador del lado del cliente fácil de usar, pero repleto de funciones para usar con Alpine.js. 
Puede ser usado con: 
-   Handle routes & process route variables. 
-   Usar magic helper `$router` ayuda a mostrar elementos dinámicamente  etc. dentro de Alpine.js Components. 
 

## Comunidad 

* [Alpine.js Weekly - Newsletter](https://alpinejs.codewithhugo.com/newsletter) 
* [Alpine.js Discord Community](https://discord.gg/CGmj5nq) 
* [Alpine.js Matrix Community](https://matrix.to/#/#AlpineJS:matrix.org) 
* [Alpine.js Persian Matrix Community](https://matrix.to/#/#AlpineJS-fa:matrix.org)

## Configuración inicial

Para utilizar Alpine.js es tan simple como agregarle al final del <Head> del archivo HTTP el enlace a su CDN:

<src="https://unpkg.com/alpinejs@3.4.2/dist/cdn.min.js">

Luego de agregar esa linea al <head> ya se puede empezar a utilizar Alpine.js, tan simple como eso.

Si prefiere instalar el paquete desde npm:

-   npm i alpinejs

Alpine nos ofrece 15 atributos y 6 propiedades y 2 métodos.

## Atributos

-   x-data: Nos permite declarar un nuevo scope (espacio de trabajo) del componente.
-   x-bind: Asigna el valor de un atributo a partir del resultado de una expresión javascript.
-   x-on: Adjunta un evento a un elemento y ejecuta una expresión javascript cuando se emite el evento.
-   x-text: Actualiza el texto que contiene un elemento.
-   x-html: Establecer el HTML interno de un elemento. 
-   x-model: Mantiene la entrada del elemento sincronizado con los datos del componente.
-   x-show: Muestra, o no, un elemento dependiendo de un resultado booleano.
-   x-transition: Transición de un elemento hacia adentro y hacia afuera usando transiciones CSS. 
-   x-for: Permite crear tantos nodos en el DOM como elementos contenga un array dado.
-   x-if: Agregar / eliminar condicionalmente un bloque de HTML de la página por completo.
-   x-init: Ejecutar código cuando Alpine inicializa un elemento.
-   x-effect: Ejecutar un script cada vez que cambie una de sus dependencias. 
-   x-ref: Referencia directamente elementos para sus claves especificadas usando la propiedad mágica `$refs`.
-   x-cloak: Ocultar un bloque de HTML hasta que Alpine termine de inicializar su contenido.
-   x-ignore: Evitar que Alpine inicialice un bloque de HTML.

En el ejemplo realizado se usaron x-data, x-bind, x-show, x-text y x-for

## Propiedades

-   `$store`: Acceda a una tienda global registrada usando.
-   `$el`: Hacer referencia al elemento DOM actual.
-   `$dispatch`: Enviar un evento de navegador personalizado desde el elemento actual.
-   `$watch`: Observe un dato y ejecute la devolución de llamada proporcionada cada vez que cambie.
-   `$refs`: Hacer referencia a un elemento por clave (especificado usando x-ref). 
-   `$nextTick`: Espere hasta el siguiente "tick" para ejecutar un poco de código.

## Métodos

-   Alpine.data: Reutilizar un objeto de datos y hacer referencia a él, usando x-data.
-   Alpine.store: Declare un dato global, reactivo, al que se puede acceder desde cualquier lugar usando `$store`.

En el ejemplo se utiliza Alpine.data

## ¿Librería o framework?

Alpine.js se hace llamar framework minimalista pero es más una librería, ya que, no establece restricciones rígidas. Solamente permite construir HTML y manejarestado de manera más sencilla. Por lo tanto, se denomina framework pero técnicamente es una librería.


