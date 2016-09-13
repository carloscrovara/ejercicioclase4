function Auto(color, modelo, patente, marca, velocidadMaxima) {

	//atributos
	this.color = color;
	this.modelo = modelo; 
	this.patente = patente;
	this.marca = marca;
	this.velocidadMaxima = velocidadMaxima;
	this.velocidad = 0; // por defecto
	this.prendido = false; // por defecto

	this.encender = function() {
		this.prendido = true;
	}

	this.acelerar = function(aceleracion) {
		if (this.prendido === true) {
			if (this.velocidad < this.velocidadMaxima) {

		     this.velocidad = this.velocidad + aceleracion;
		     }
		     else {
		     	console.log('Alcanzó la velocidad máxima');
		     }
		}
		else {
			console.log('Primero debe encender el auto');
		}     
	}

	this.mostrarVelocidadActual = function() {
		console.log(this.velocidad);
	}

	this.frenar = function(desaceleracion) {
		this.velocidad = this.velocidad - desaceleracion;
	}

	this.apagar = function() {
		this.prendido = false; 
	}
}

