// 1. Contraseña válida
function contrasenaValida(str) {
  return str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9";
}

console.log("1.", contrasenaValida("2Fj(jjbFsuj"));
console.log("1.", contrasenaValida("hola"));


// 2. Calcular impuestos
function calcularImpuestos(edad, ingresos) {
  if (edad >= 18 && ingresos >= 1000) {
    return ingresos * 0.4;
  }
  return 0;
}

console.log("2.", calcularImpuestos(20, 2000));


// 3. IMC.
function bmi(peso, altura) {
  let imc = peso / (altura * altura);

  if (imc < 18.5) return "Bajo de peso";
  if (imc <= 24.9) return "Normal";
  if (imc <= 29.9) return "Sobrepeso";
  return "Obeso";
}

console.log("3.", bmi(70, 1.75));


// 4. Imprimir arreglo
function imprimirArreglo(arreglo) {
  for (let elemento of arreglo) {
    console.log(elemento);
  }
}

console.log("4.");
imprimirArreglo([1, 2, 3]);


// 5. Likes
function likes(numero) {
  if (numero < 1000) return numero.toString();
  if (numero < 1000000) return Math.floor(numero / 1000) + "K";

  return Math.floor(numero / 1000000) + "M";
}

console.log("5. Likes:");
console.log("  1400 →", likes(1400));
console.log("  34567 →", likes(34567));
console.log("  7456345 →", likes(7456345));
console.log("  500 →", likes(500));


// 6. FizzBuzz
function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) return "fizzbuzz";
  if (numero % 3 === 0) return "fizz";
  if (numero % 5 === 0) return "buzz";

  return numero;
}

console.log("6.", fizzBuzz(15));


// 7. Contar rango
function contarRango(inicio, fin) {
  let contador = 0;

  for (let i = inicio + 1; i < fin; i++) {
    contador++;
  }

  return contador;
}

console.log("7.", contarRango(1, 9));


// 8. Sumar rango
function sumarRango(inicio, fin) {
  let suma = 0;

  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }

  return suma;
}

console.log("8.", sumarRango(1, 5));


// 9. Número de aes
function numeroDeAes(str) {
  let contador = 0;

  for (let letra of str) {
    if (letra === "a") contador++;
  }

  return contador;
}

console.log("9.", numeroDeAes("banana"));


// 10. Número de caracteres
function numeroDeCaracteres(str, caracter) {
  let contador = 0;

  for (let letra of str) {
    if (letra === caracter) contador++;
  }

  return contador;
}

console.log("10.", numeroDeCaracteres("banana", "a"));


// 11. Sumar arreglo
function sumarArreglo(arreglo) {
  let suma = 0;

  for (let num of arreglo) {
    suma += num;
  }

  return suma;
}

console.log("11.", sumarArreglo([1, 2, 3]));


// 12. Multiplicar arreglo
function multiplicarArreglo(arreglo) {
  let resultado = 1;

  for (let num of arreglo) {
    resultado *= num;
  }

  return resultado;
}

console.log("12.", multiplicarArreglo([2, 3, 4]));


// 13. Remover ceros
function removerCeros(arreglo) {
  let nuevo = [];

  for (let num of arreglo) {
    if (num !== 0) nuevo.push(num);
  }

  return nuevo;
}

console.log("13.", removerCeros([0, 1, 0, 2, 3]));


// 14. Sumar arreglo rango
function sumarArregloRango(arreglo, inicio, fin) {
  let suma = 0;

  for (let i = inicio; i <= fin; i++) {
    suma += arreglo[i];
  }

  return suma;
}

console.log("14.", sumarArregloRango([1, 2, 3, 4, 5], 1, 3));


// 15. Transcribir ADN
function transcribir(adn) {
  let arn = "";

  for (let letra of adn) {
    if (letra === "G") arn += "C";
    else if (letra === "C") arn += "G";
    else if (letra === "T") arn += "A";
    else if (letra === "A") arn += "U";
  }

  return arn;
}

console.log("15.", transcribir("ACGT"));


// 16. Capitalizar palabra
function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log("16.", capitalizar("hola"));


// 17. Capitalizar palabras
function capitalizarPalabras(str) {
  let palabras = str.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    palabras[i] =
      palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  }

  return palabras.join(" ");
}

console.log("17.", capitalizarPalabras("hola mundo"));


// 18. Máximo
function max(arreglo) {
  let mayor = arreglo[0];

  for (let num of arreglo) {
    if (num > mayor) mayor = num;
  }

  return mayor;
}

console.log("18.", max([3, 9, 2, 7]));


// 19. Mínimo
function min(arreglo) {
  let menor = arreglo[0];

  for (let num of arreglo) {
    if (num < menor) menor = num;
  }

  return menor;
}

console.log("19.", min([3, 9, 2, 7]));


// 20. Generar contraseña
function password(str) {
  return str
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll("a", "4")
    .replaceAll("e", "3")
    .replaceAll("i", "1")
    .replaceAll("o", "0");
}

console.log("20.", password("Hola Mundo"));


// 21. Números pares
function pares(arreglo) {
  let resultado = [];

  for (let num of arreglo) {
    if (num % 2 === 0) resultado.push(num);
  }

  return resultado;
}

console.log("21.", pares([1, 2, 3, 4, 5, 6]));


// 22. Posiciones pares
function posiciones(arreglo) {
  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      resultado.push(i);
    }
  }

  return resultado;
}

console.log("22.", posiciones([1, 2, 3, 4, 6]));


// 23. Duplicar
function duplicar(arreglo) {
  let resultado = [];

  for (let num of arreglo) {
    resultado.push(num * 2);
  }

  return resultado;
}

console.log("23.", duplicar([1, 2, 3]));


// 24. Empiezan con A
function empiezanConA(arreglo) {
  let resultado = [];

  for (let palabra of arreglo) {
    if (palabra.toLowerCase().startsWith("a")) {
      resultado.push(palabra);
    }
  }

  return resultado;
}

console.log("24.", empiezanConA(["Ana", "Pedro", "Andres"]));


// 25. Terminan con S
function terminanConS(arreglo) {
  let resultado = [];

  for (let palabra of arreglo) {
    if (palabra.toLowerCase().endsWith("s")) {
      resultado.push(palabra);
    }
  }

  return resultado;
}

console.log("25.", terminanConS(["Carlos", "Ana", "Luis"]));


// 26. Imprimir matriz
function imprimirMatriz(matriz) {
  for (let fila of matriz) {
    for (let elemento of fila) {
      console.log(elemento);
    }
  }
}

console.log("26.");
imprimirMatriz([[1, 2], [3, 4]]);


// 27. Números a palabras
function numerosAPalabras(arreglo) {
  const palabras = [
    "cero",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve"
  ];

  let resultado = [];

  for (let num of arreglo) {
    resultado.push(palabras[num]);
  }

  return resultado;
}

console.log("27.", numerosAPalabras([1, 2, 3]));


// 28. Palabras a números
function palabrasANumeros(arreglo) {
  const numeros = {
    cero: 0,
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9
  };

  let resultado = [];

  for (let palabra of arreglo) {
    resultado.push(
      numeros[palabra.toLowerCase()] !== undefined
        ? numeros[palabra.toLowerCase()]
        : -1
    );
  }

  return resultado;
}

console.log("28.", palabrasANumeros(["uno", "dos", "hola"]));


// 29. Número de asteriscos
function numAsteriscos(arreglo) {
  let contador = 0;

  for (let elemento of arreglo) {
    if (elemento === "*") contador++;
  }

  return contador;
}

console.log("29.", numAsteriscos(["*", "hola", "*"]));


// 30. Asteriscos en matriz
function numAsteriscosMatriz(matriz) {
  let contador = 0;

  for (let fila of matriz) {
    for (let elemento of fila) {
      if (elemento === "*") contador++;
    }
  }

  return contador;
}

console.log("30.", numAsteriscosMatriz([
  ["*", "*"],
  ["hola", "*"]
]));


// 31. Distancia entre strings
function distancia(str1, str2) {
  let contador = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      contador++;
    }
  }

  return contador;
}

console.log("31.", distancia("hola", "hilo"));