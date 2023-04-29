# P5.js
Este código está elaborado en P5.js, este es una biblioteca de JavaScript utilizada para crear gráficos y animaciones interactivas en el navegador web. Se basa en el lenguaje de programación Processing, y proporciona una sintaxis fácil de usar y orientada a objetos para dibujar formas, imágenes y animaciones en el lienzo HTML5. p5.js se puede utilizar para crear juegos, visualizaciones de datos, arte interactivo y mucho más. 

# Ping Pong
Este código implementa un juego simple de "Pong", donde la clase "Figura" es una clase abstracta de la cual podemos hacer herencia y polimorfismo, está la clase "Figura" que es la clase padre y tenemos sus clases hijas "Pelota" y "Racket" las cuales heredan de la clase "Figura" todos sus atriburtos y métodos.

### Pelota
Para hacer la parte de polimorfismo en la clase "Figura" agregé dos métodos "update" y "draw".
En la clase "Pelota" definí el método "draw" para que se dibujara un elipse de color rojo y se pudiera cambiar la posicion en X e Y, el tamano y la velocidad en X e Y.
El "update" está definido para que cuando la pelota choque con las paredes, ésta rebote.
Tambien agregué un método llamado "checkCollision" que hace que cuando la figura fuera un círculo y colisionara con la racketa immediatamente se convierta en un triángulo y cuando sea un triángulo y colisione con la racketa se vuelva un círculo, además al detectar la colision, la racketa cambiara su color de manera aleatoria.

### Racket
En la clase "Racket", el método "draw" está definído para que se dibuje un rectangulo de color blanco y se pudiera cambiar la posicion en X e Y, el tamano y la velocidad en X e Y.
Para poder hacer que la racketa se mantuviera solamente en la posición x, el el método "update" creé una variable para identificar la posición de la racketa y agregé condicionales if en donde usé la palabra "mouseX".

Y en la "función setup" creé dos objetos una pelota y una racketa en donde definimos sus cordenadas, tamaño y velocidad en X e Y.
en a "función draw" mandé a llamar a los métodos "draw" y "update", además implenté un  contador para que cada que vez que la pelota colisionara con la racketa, éste aumentara en 1.

### Referencia
https://youtu.be/35ePfx14QeE
