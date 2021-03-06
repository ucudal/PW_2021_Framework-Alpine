# Alpine 
 
Alpine.js ofrece las propiedades reactivas y declarativas de grandes frameworks como Vue o React con un coste mucho menor. Mantiene el DOM, pudiendo mejorar y perfeccionar el comportamiento como m谩s convenga. 
 
## Plugin 馃尣 Spruce 
 
Una capa de gesti贸n de estado global ligera para Alpine.js 
  
### Documentaci贸n 

Para aprender m谩s de Spruce y c贸mo usarlo, por favor ir a [documentaci贸n oficial](https://spruce.ryangjchandler.co.uk). 
 
## Plugin Alpine.js devtools   

Alpine.js devtools es una simple extensi贸n para permitirte debuguear Alpine js componentes f谩cilmente. 
  
### Identificaci贸n de componentes 

A diferencia de otros frameworks, Alpine no incluye  named components. Por eso por default, Alpine js devtools intentara identificar los component names  
de los atributos. 
 
### Pre requisitos 

-   Node ^14.x 
-   npm ^6.x 

### Correr el Alpine.js devtools simulator 
 
A devtools simulator se puede utilizar para correr test y tener un flujo de trabajo. 

## Plugin Magic Helpers 

Una colecci贸n de magic properties y helper functions para usar con Alpine JS version 2 

### Funcionalidades 

| Magic Helpers | Descripcion | 
| --- | --- | 
| [`$component/$parent`](#component) | Nativo acceso y actualizaci贸n de data de otro componente o padre del componente. | 
| [`$fetch/$get/$post`](#fetch) | Usando Axios, fetch JSON desde una fuente externa.  | 
| [`$interval`](#interval) | Correr una funci贸n cada n milisegundos.  | 
| [`$range`](#range) | Iterar sobre un rango de valores. | 
| [`$refresh`](#refresh) | Manualmente refrescar un componente. | 
| [`$scroll`](#scroll) | Scroll la pagina verticalmente a una posici贸n especifica | 
| [`$truncate`](#truncate) | Limita un texto String a un n煤mero espec铆fico de caracteres. | 
| [`$undo`](#undo) | Detectar cambios de estado dentro de tus componentes. | 

## Plugin Alpine.js Test Utils 

Utilidades para testing de componentes Alpine.js . 
**Esta librer铆a te permite escribir r谩pido y f谩cil test para Alpine.js  

## Plugin Pinecone Router 

La extensi贸n client-side router para Alpine.js. 
 
### Funcionalidades 

Un enrutador del lado del cliente f谩cil de usar, pero repleto de funciones para usar con Alpine.js. 
Puede ser usado con: 
-   Handle routes & process route variables. 
-   Usar magic helper `$router` ayuda a mostrar elementos din谩micamente  etc. dentro de Alpine.js Components. 
 

## Comunidad 

* [Alpine.js Weekly - Newsletter](https://alpinejs.codewithhugo.com/newsletter) 
* [Alpine.js Discord Community](https://discord.gg/CGmj5nq) 
* [Alpine.js Matrix Community](https://matrix.to/#/#AlpineJS:matrix.org) 
* [Alpine.js Persian Matrix Community](https://matrix.to/#/#AlpineJS-fa:matrix.org)

## Configuraci贸n inicial

Para utilizar Alpine.js es tan simple como agregarle al final del <Head> del archivo HTTP el enlace a su CDN:

<src="https://unpkg.com/alpinejs@3.4.2/dist/cdn.min.js">

Luego de agregar esa linea al <head> ya se puede empezar a utilizar Alpine.js, tan simple como eso.

Si prefiere instalar el paquete desde npm:

-   npm i alpinejs

Alpine nos ofrece 15 atributos y 6 propiedades y 2 m茅todos.

## Atributos

-   x-data: Nos permite declarar un nuevo scope (espacio de trabajo) del componente.
-   x-bind: Asigna el valor de un atributo a partir del resultado de una expresi贸n javascript.
-   x-on: Adjunta un evento a un elemento y ejecuta una expresi贸n javascript cuando se emite el evento.
-   x-text: Actualiza el texto que contiene un elemento.
-   x-html: Establecer el HTML interno de un elemento. 
-   x-model: Mantiene la entrada del elemento sincronizado con los datos del componente.
-   x-show: Muestra, o no, un elemento dependiendo de un resultado booleano.
-   x-transition: Transici贸n de un elemento hacia adentro y hacia afuera usando transiciones CSS. 
-   x-for: Permite crear tantos nodos en el DOM como elementos contenga un array dado.
-   x-if: Agregar / eliminar condicionalmente un bloque de HTML de la p谩gina por completo.
-   x-init: Ejecutar c贸digo cuando Alpine inicializa un elemento.
-   x-effect: Ejecutar un script cada vez que cambie una de sus dependencias. 
-   x-ref: Referencia directamente elementos para sus claves especificadas usando la propiedad m谩gica `$refs`.
-   x-cloak: Ocultar un bloque de HTML hasta que Alpine termine de inicializar su contenido.
-   x-ignore: Evitar que Alpine inicialice un bloque de HTML.

En el ejemplo realizado se usaron x-data, x-bind, x-show, x-text y x-for

## Propiedades

-   `$store`: Acceda a una tienda global registrada usando.
-   `$el`: Hacer referencia al elemento DOM actual.
-   `$dispatch`: Enviar un evento de navegador personalizado desde el elemento actual.
-   `$watch`: Observe un dato y ejecute la devoluci贸n de llamada proporcionada cada vez que cambie.
-   `$refs`: Hacer referencia a un elemento por clave (especificado usando x-ref). 
-   `$nextTick`: Espere hasta el siguiente "tick" para ejecutar un poco de c贸digo.

## M茅todos

-   Alpine.data: Reutilizar un objeto de datos y hacer referencia a 茅l, usando x-data.
-   Alpine.store: Declare un dato global, reactivo, al que se puede acceder desde cualquier lugar usando `$store`.

En el ejemplo se utiliza Alpine.data

## 驴Librer铆a o framework?

Alpine.js se hace llamar framework minimalista pero es m谩s una librer铆a, ya que, no establece restricciones r铆gidas. Solamente permite construir HTML y manejarestado de manera m谩s sencilla. Por lo tanto, se denomina framework pero t茅cnicamente es una librer铆a.


