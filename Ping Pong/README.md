h1 P5.js
Este código está elaborado en P5.jsp5.js, este es una biblioteca de JavaScript utilizada para crear gráficos y animaciones interactivas en el navegador web. Se basa en el lenguaje de programación Processing, y proporciona una sintaxis fácil de usar y orientada a objetos para dibujar formas, imágenes y animaciones en el lienzo HTML5. p5.js se puede utilizar para crear juegos, visualizaciones de datos, arte interactivo y mucho más. 

h1 Ping Pong
Este código implementa un juego simple de "Pong", donde la clase "Figura" es una clase abstracta de la cual podemos hacer herencia y polimorfismo, está la clase "Figura" que es la clase padre y tenemos sus clases hijas "Pelota" y "Racket" las cuales heredan de la clase "Figura" todos sus atriburtos y métodos.

h2 Pelota
Para hacer la parte de polimorfismo en la clase "Figura" agregé dos métodos "update" y "draw".
En la clase "Pelota" definí el método "draw" para que se dibujara un elipse de color rojo y se pudiera cambiar la posicion en X e Y, el tamano y la velocidad en X e Y.
El "update" está definido para que cuando la pelota choque con las paredes, ésta rebote.
Tambien agregué un método llamado "checkCollision" que hace que cuando la figura fuera un círculo y colisionara con la racketa immediatamente se convierta en un triángulo y cuando sea un triángulo y colisione con la racketa se vuelva un círculo, además al detectar la colision, la racketa cambiara su color de manera aleatoria.

h2 Racket
En la clase "Racket", el método "draw" está definído para que haga que al momento de colisionar con la pelota, éste cambie de color de forma random.
Para poder hacer lo anterior, agregué un método en la clase "Pelota" llamado "checkCollision" en donde primero, por medio de condicionales if, detectara la colision entre las figuras y así se ejecutara el cambio de forma de la peloto y además que la raqueta cam





Y el método "update"  ......que son que es una posición (`posicion`), un ancho (`ancho`) y un alto (`alto`) y una velocidad (`velocidad`). La clase `Pelota` es una subclase de `Figura` que representa la pelota en el juego. La pelota tiene un color (`color`), una forma (`forma`) que puede ser un círculo o un triángulo y un método `checkCollision` que comprueba si la pelota ha chocado con la paleta (`racket`). La clase `Racket` es otra subclase de `Figura` que representa la paleta en el juego. La paleta tiene un color (`color`) y un método `changeColor` que cambia su color al azar.

En la función `setup` se crea el canvas y se instancian un objeto `racket` y un objeto `pelota`.

En la función `draw` se dibujan y actualizan los objetos `pelota` y `racket`, se comprueba si la pelota ha chocado con la paleta y se actualiza el puntaje (`score`). También se muestra el puntaje en la pantalla.
