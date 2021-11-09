Proceso Ejercicio_11
	darBono()
FinProceso
Funcion darBono()
	Definir a Como Real
	
	Escribir 'Ingrese cuantos años lleva lavorando para la empresa'
	Leer a
	si a > 0 & a < 6 Entonces
		Escribir 'Su bono es de $' a*100
	SiNo
		Escribir 'Su bono es de $1000'
	FinSi
FinFuncion
