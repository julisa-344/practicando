/* --------- 1  --------- */
function suma(a, b) {
  return a + b;
}
//interactuando con el html
function sumaHtml() {
  const input1 = document.getElementById("suma1");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("suma2");
  const value2 = parseInt(input2.value);

  const sumar = suma(value1, value2);
  document.getElementById("suma_btn").innerHTML = sumar;
}

/* --------- 2  --------- */
function calcularPromedioExamenes(notas) {
  const sumaNotas = notas.reduce(function (sumandoNotas = 0, nuevoElemento) {
    return sumandoNotas + nuevoElemento;
  });
  return sumaNotas / notas.length;
}
//interactuando con el html
function promedioHtml() {
  const input1 = document.getElementById("nota1");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("nota2");
  const value2 = parseInt(input2.value);
  const input3 = document.getElementById("nota1");
  const value3 = parseInt(input3.value);
  const input4 = document.getElementById("nota2");
  const value4 = parseInt(input4.value);

  const promedio = calcularPromedioExamenes([value1, value2, value3, value4]);
  document.getElementById("promedio_btn").innerHTML =
    "El promedio es: " + promedio;
}

/* --------- 3  --------- */
function areaRectangulo(base, altura) {
  return base * altura;
}
//interactuando con el html
function areaRectanguloHtml() {
  const input1 = document.getElementById("base1");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("altura2");
  const value2 = parseInt(input2.value);

  const areaRectangulos = areaRectangulo(value1, value2);
  document.getElementById("areaRectangulo_btn").innerHTML =
    "El area es: " + areaRectangulos;
}

/* --------- 4  --------- */
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//interactuando con el html
function areaTrianguloHtml() {
  const input1 = document.getElementById("baset1");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("alturat2");
  const value2 = parseInt(input2.value);

  const areaTriangulos = areaTriangulo(value1, value2);
  document.getElementById("areaTriangulo_btn").innerHTML =
    "El area es: " + areaTriangulos;
}

/* --------- 5  --------- */
function areaCirculo(radio) {
  return radio * radio * 3.14;
}
//interactuando con el html
function areaCirculoHtml() {
  const input1 = document.getElementById("radio");
  const value1 = parseInt(input1.value);

  const areaCirculos = areaCirculo(value1);
  document.getElementById("areaCirculo_btn").innerHTML =
    "El area es: " + areaCirculos;
}

/* --------- 6  --------- */
function salarioSemanal(horasTrabajo, pagoHora, diasPorSemana) {
  return horasTrabajo * pagoHora * diasPorSemana;
}
//interactuando con el html
function salarioSemanalHtml() {
  const input1 = document.getElementById("horasTrabajo");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("pagoHora");
  const value2 = parseInt(input2.value);
  const input3 = document.getElementById("diasPorSemana");
  const value3 = parseInt(input3.value);

  const salarioSemanall = salarioSemanal(value1, value2, value3);
  document.getElementById("salarioSemanal_btn").innerHTML =
    "El salario semanal es de : " + salarioSemanall + " S/.";
}

/* --------- 7  --------- */
function metrosApulgadas(metros) {
  return metros * 39.3701;
}
//interactuando con el html
function metrosApulgadaslHtml() {
  const input1 = document.getElementById("metros");
  const value1 = parseInt(input1.value);

  const metrosApulgadass = metrosApulgadas(value1);
  document.getElementById("metrosApulgadas_btn").innerHTML =
    "Usted requiere " + metrosApulgadass + " pulgadas de tela.";
}

/* --------- 8  --------- */
function solesAdolares(soles) {
  return soles * 0.25;
}

//interactuando con el html
function solesAdolaresHtml() {
  const input1 = document.getElementById("soles");
  const value1 = parseInt(input1.value);

  const solesAdolaress = solesAdolares(value1);
  document.getElementById("solesAdolares_btn").innerHTML =
    "La cantidad en dólares es de $ " + solesAdolaress;
}

  /* --------- 9  --------- */
  function calcularEdad(anoNacio) {
    anoActual = 2021
    return anoActual - anoNacio;
  }

  //interactuando con el html
function calcularEdadHtml() {
  const input1 = document.getElementById("anoNacio");
  const value1 = parseInt(input1.value);

  const calcularEdadd = calcularEdad(value1);
  document.getElementById("calcularEdad_btn").innerHTML =
    "Su edad es " + calcularEdadd;
}

/* --------- 10  --------- */
function calcularMenor(edad1, edad2, edad3) {
  if (edad1 < edad2 && edad1 < edad3) {
    return edad1;
  } else if (edad2 < edad1 && edad2 < edad3) {
    return edad2;
  } else {
    return edad3;
  }
}

//interactuando con el html
function calcularMenorHtml() {
  const input1 = document.getElementById("edad1");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("edad2");
  const value2 = parseInt(input2.value);
  const input3 = document.getElementById("edad3");
  const value3 = parseInt(input3.value);

  const calcularMenorr = calcularMenor(value1, value2, value3);
  document.getElementById("calcularMenor_btn").innerHTML =
    "El menor tiene " + calcularMenorr + " años.";
}

  /* --------- 11  --------- */
  function darBono(anosLaborando){
    if (anosLaborando > 0 && anosLaborando < 6 ){
      return "Su bono es de" + anosLaborando*100 + "S/."
    } else {
      return "Felicitaciones, usted tiene un bono especial de " + 1000 + "S/."
    }
  }

    //interactuando con el html
function darBonoHtml() {
  const input1 = document.getElementById("anosLaborando");
  const value1 = parseInt(input1.value);

  const darBonoo = darBono(value1);
  document.getElementById("darBono_btn").innerHTML = darBonoo;
}


  /* --------- 12  --------- */
  function salarioPorAno(){
    let sueldo = 1500;
    for (ano=1; ano < 7; ano++){
      sueldo = sueldo + (sueldo * 0.1)
      console.log("El salario en el año "+ ano +" será de "+ sueldo)
    }
  }
  /* --------- 13  --------- */

  function aprobadosDesaprobadosHtml(){

    let total = parseFloat(prompt("Ingrese la cantidad de alumnos."));
    let desaprobados = 0;
    let aprobados = 0;
    function aprobadosDesaprobados(total){
      while (total>0){
        let nota = parseFloat(prompt("Ingrese la nota del alumno."));
        if (nota>=12 && nota<=20){
          aprobados++;
        }else if (nota<=12 && nota>=0){
          desaprobados++;
      } else {
        parseFloat(prompt("Ingrese calificación válida."))
      }
      total--;
      }
      console.log("La cantidad de alumnos aprobados fue de: " + aprobados);
      console.log("La cantidad de alumnos desaprobados fue de: " + desaprobados);

    }
    aprobadosDesaprobados(total);
  };
  /* --------- 14  --------- */
  function focosHtml(){

    let total = parseFloat(prompt("Ingrese la cantidad de focos."));
    let verde = 0;
    let blanco = 0;
    let rojo = 0;
    function focos(total){
      while (total>0){
        let color = parseFloat(prompt("Seleccione un color: "));
        if (color > 0 & color < 4){
          if ( color == 1) {
            verde++;
          } else if (color == 2){
            blanco++;
          } else {
            rojo++;
          }
        } else {
        parseFloat(prompt("Ingrese color válido."))
      }
      total--;
      }
      console.log("El número de focos verdes fue de: " + verde);
      console.log("El número de blancos verdes fue de: " + blanco);
      console.log("El número de rojos verdes fue de: " + rojo);
    }
    focos(total);
  };
  /* --------- 15  --------- */
  function verificarEdad (edad){
    if(edad >= 13){
      return 'Usted puede votar en las siguientes elecciones.'
    } else {
      return 'Lo siento usted no puede votar en las siguientes elecciones, porque no cumple con el requisito de la edad.'
    }
  }
    //interactuando con el html
    function verificarEdadHtml() {
      const input1 = document.getElementById("edadVotacion");
      const value1 = parseInt(input1.value);

      const verificarEdadd = verificarEdad(value1);
      document.getElementById("edadVotacion_btn").innerHTML = verificarEdadd;
    }