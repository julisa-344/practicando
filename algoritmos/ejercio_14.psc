Proceso Ejercio_14
	Definir total, color, verde, blanco, rojo Como Entero
	verde = 0
	blanco = 0
	rojo = 0
	Escribir 'Ingresa la cantidad de focos'
	Leer total
	Mientras total > 0 Hacer
		Escribir 'Seleccione un color: '
		Escribir 'Verde = 1'
		Escribir 'Blanco = 2'
		Escribir 'Rojo = 3'
		Leer color
		Si color > 0 & color < 4 Entonces
			si color == 1 Entonces
				verde = verde + 1
			SiNo
				si color == 2 Entonces
					blanco = blanco + 1
				SiNo
						rojo = rojo + 1
				FinSi
			FinSi
			total = total - 1
		SiNo
			Escribir 'Ingrese un color válido'
		FinSi
	FinMientras
	Escribir 'El número de focos verdes fue de: ' verde
	Escribir 'El número de focos blancos fue de: ' blanco
	Escribir 'El número de focos rojos fue de: ' rojo
FinProceso
