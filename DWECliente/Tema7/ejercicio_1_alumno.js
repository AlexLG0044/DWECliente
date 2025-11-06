// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero) 
  function raizCuadrada(numero) {
            return Math.sqrt(numero);
        }
  const res = raizCuadrada(v);
  out.textContent = `Resultado: ${res}`;

});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';
    function alerta(mensaje) {
            alert(mensaje);
        }
  alerta(msg);
  document.getElementById('out-e2').textContent = 'Implementa la función alerta(mensaje) para mostrar un alert en el navegador.';
});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {

  // TODO: usa new Function para construir y ejecutar una función que sume a y b
      const suma = new Function('a', 'b', 'return a + b;');
      const a = parseFloat(document.getElementById('a-e3a').value);
      const b = parseFloat(document.getElementById('a-e3b').value);
      const resultado = suma(a, b);
      document.getElementById('out-e3').textContent = `Resultado de la suma: ${resultado}`;
});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  // TODO: reproduce el ejemplo en el código editando esta función.
  console.log(ej4);
  var ej4 = 5;
  console.log(ej4); 
  
});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
  const resultado = (function() {
      console.log('Ejecutando IIFE');
      return 15;
  })();
  document.getElementById('out-e5').textContent = `Resultado de la IIFE: ${resultado}`;
});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {

  // TODO: define y usa esa función para devolver el resultado
  const dividir = function(a, b) {
      return a / b;
  };
  const a = parseFloat(document.getElementById('a-e6a').value);
  const b = parseFloat(document.getElementById('a-e6b').value);
  const resultado = dividir(a, b);
  document.getElementById('out-e6').textContent = `Resultado de la división: ${resultado}`;
});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {

  // TODO: implementa una función flecha multiplicar = 
  const multiplicar = (a, b) => a * b;

  const a = parseFloat(document.getElementById('a-e7a').value);
  const b = parseFloat(document.getElementById('a-e7b').value);
  const resultado = multiplicar(a, b);
  document.getElementById('out-e7').textContent = `Resultado de la multiplicación: ${resultado}`;
});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {

  // TODO: implementar function saludar
  function saludar(nombre = '') {
      return `Hola, ${nombre}!`;
  }

  const nombre = document.getElementById('a-e8').value;
  const resultado = saludar(nombre);
  document.getElementById('out-e8').textContent = resultado;
});

// Ejercicio 9 - Funciones anidadas (plantilla)
document.getElementById('run-e9').addEventListener('click', function () {

  // TODO: implementar función externa e interna
  function externa() {
    let contador = 0;
    contador++;
    function interna() {
      return contador;
    }
    return interna();
  }

  const resultado = externa();
  document.getElementById('out-e9').textContent = `Resultado: ${resultado}`;
});

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {

  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)
  const str = document.getElementById('a-e10').value;
  const length = str.length;
  const upper = str.toUpperCase();
  const trimmed = str.trim();
  const indexOf = str.indexOf('Mundo');
  const randomNum = Math.random().toFixed(4);
  const timestamp = Date.now();

  const resultado = `Length: ${length}, Uppercase: ${upper}, Trimmed: ${trimmed}, Index of: ${indexOf}, Random: ${randomNum}, Timestamp: ${timestamp}`;
  document.getElementById('out-e10').textContent = resultado;
});
