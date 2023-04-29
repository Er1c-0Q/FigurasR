class Figura {
  constructor(x, y, ancho, alto, velx, vely) {
    this.posicion = createVector(x, y);
    this.ancho = ancho;
    this.alto = alto;
    this.velocidad = createVector(velx, vely);
  }
  
  // Método vacío para ser redefinido en subclases
  draw() {}

  // Método vacío para ser redefinido en subclases
  update() {}
}

class Pelota extends Figura {
  constructor(x, y, ancho, alto, velx, vely) {
    super(x, y, ancho, alto, velx, vely);
    this.color = color('red');
    this.forma = 'circulo'; // nueva variable de instancia para la forma actual
  }

  draw() {
    fill(this.color);
    if (this.forma === 'circulo') { // cambiar la forma según la variable "forma"
      ellipse(this.posicion.x, this.posicion.y, this.ancho, this.alto);
    } else {
      triangle(this.posicion.x - this.ancho / 2, this.posicion.y + this.alto / 2,
               this.posicion.x + this.ancho / 2, this.posicion.y + this.alto / 2,
               this.posicion.x, this.posicion.y - this.alto / 2);
    }
  }

  update() {
    if (this.posicion.x + this.ancho >= width || this.posicion.x <= 0) {
      this.velocidad.x *= -1;
    }

    if (this.posicion.y + this.alto >= height || this.posicion.y <= 0) {
      this.velocidad.y *= -1;
    }

    this.posicion.add(this.velocidad);
  }

  checkCollision(racket) {
    if (this.posicion.y + this.alto >= racket.posicion.y &&
        this.posicion.y <= racket.posicion.y + racket.alto &&
        this.posicion.x + this.ancho >= racket.posicion.x &&
        this.posicion.x <= racket.posicion.x + racket.ancho) {
      this.velocidad.y *= -1;
      score++;
      racket.changeColor();

      if (this.forma === 'circulo') { // cambiar la forma de la pelota
        this.ancho = this.ancho;
        this.alto = this.alto;
        this.forma = 'triangulo';
      } else {
        this.ancho = this.ancho;
        this.alto = this.alto;
        this.forma = 'circulo';
      }

      return true;
    }
    return false;
    
  }
  
}

class Racket extends Figura {
  constructor(x, y, ancho, alto, velx, vely) {
    super(x, y, ancho, alto, velx, vely);
    this.color = color('black');
  }

  draw() {
    fill(this.color);
    rect(this.posicion.x, this.posicion.y, this.ancho, this.alto);
  }

  update() {
    let nuevaPosicion = mouseX - this.ancho / 2;
    if (nuevaPosicion < 0) {
      nuevaPosicion = 0;
    } else if (nuevaPosicion + this.ancho > width) {
      nuevaPosicion = width - this.ancho;
    }
    this.posicion.x = nuevaPosicion;
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }
}

let score = 0;
let racket, pelota;


function setup() {
  createCanvas(400, 320);
  racket = new Racket((width / 2 )- 30, height - 10, 60, 7);
  pelota = new Pelota(width / 2, height / 2, 20, 20, 4, -4);
}

function draw() {
  background(255);
  pelota.draw();
  pelota.update();
  if (pelota.checkCollision(racket)) {
    
  }
  racket.draw();
  racket.update();
  fill(217, 195, 247);
  textSize(16);
  text(`Score: ` + score, 10, 25);
}
