/* --------- 1  --------- */
function suma(a, b) {
  return a + b;
}
//interactuando con el html
function sumaHtml(){
  const input1 = document.getElementById("suma1")
  const value1 = parseInt(input1.value)
  const input2 = document.getElementById("suma2")
  const value2 = parseInt(input2.value)

  const sumar = suma(value1, value2);
  document.getElementById("suma_btn").innerHTML=sumar
}
/* --------- 2  --------- */
function calcularPromedioExamenes(notas) {
  const sumaNotas = Notas.reduce(function (sumandoNotas = 0, nuevoElemento) {
    return sumandoNotas + nuevoElemento;
  });
  return sumaNotas / notas.length;
}
//interactuando con el html
function calcularPromedioExamenesHtml(){
  const input1 = document.getElementById("suma1")
  const value1 = parseInt(input1.value)
  const input2 = document.getElementById("suma2")
  const value2 = parseInt(input2.value)

  const sumar = suma(value1, value2);
  document.getElementById("suma_btn").innerHTML=sumar
}
/* --------- 3  --------- */
function areaRectangulo(base, altura) {
  return base * altura;
}
/* --------- 4  --------- */
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
/* --------- 5  --------- */
function areaCirculo(radio) {
  return radio * radio * pi;
}
/* --------- 6  --------- */
function salarioSemanal(horasTrabajo, pagoHora, diasPorSemana) {
  return horasTrabajo * pagoHora * diasPorSemana;
}
/* --------- 7  --------- */
function metrosApulgadas(metros) {
  return metros * 39.3701;
}
/* --------- 8  --------- */
function solesAdolares(soles) {
  return soles * 0.25;
}
/* --------- 9  --------- */
function calcularEdad(anoNacio, anoActual) {
  return anoActual - anoNacio;
}
/* --------- 10  --------- */
function calcularMenor(edad1, edad2, edad3) {
  if (edad1 < edad2 && edad1 < edad3) {
    return edad1;
  } else if (edad2 < edad1 && edads < edad3) {
    return edad2;
  } else {
    return edad3;
  }
}
/* --------- 11  --------- */
function darBono(anosLaborando){
  if (anosLaborando > 0 && anosLaborando < 6 ){
    return anosLaborando*100
  } else {
    return 1000
  }
}
/* --------- 12  --------- */
function salarioPorAno(){
  let sueldo = 1500;
  let ano = 1;
  while (ano < 7){
    ano++
    sueldo = sueldo + sueldo * 0.1
    return sueldo
  }
}
/* --------- 13  --------- */
/* --------- 14  --------- */
/* --------- 15  --------- */
function verificarEdad (edad){
  if(edad >= 13){
    return 'Usted puede votar las siguientes elecciones.'
  } else {
    return 'Lo siento, no cumple con el requisito de la edad.'
  }
}

