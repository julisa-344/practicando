Proceso Ejercicio_13
	Definir total, aprobados, reprobados Como Entero
	Definir calificacion Como Real
	aprobados = 0
	reprobados = 0
	Escribir 'Ingrese el número de alumnos'
	Leer total
	
	Mientras total > 0 Hacer
		Escribir 'Ingrese la calificación'
		Leer calificacion 
		Si calificacion > 11 Entonces
			aprobados = aprobados + 1
		SiNo
			reprobados = reprobados + 1
		FinSi
		total = total - 1
	FinMientras
	Escribir 'El número de aprobados fue de: ' aprobados
	Escribir 'El número de reprobados fue de: ' reprobados 
FinProceso
