// Ejercicio Javascript

// Ejercicio 1: función de ordenamiento ascendente y descendente.

function ascendente(arreglo) {
  for (let i = 1; i < arreglo.length; i++) {
    //Se asigna el valor en la posición 'i' a la variable 'actual'.
    let actual = arreglo[i];
    //La variable 'j' toma el valor 'i-1'
    let j = i - 1;

    //Mientras 'j' sea mayor a -1, es decir, no salga del arreglo y mientras el valor 'actual' sea menor a 'arreglo[j]'
    //continúa el loop
    while (j > -1 && actual < arreglo[j]) {
      //El valor en 'arreglo[j+1]' pasa a ser 'arreglo[j]', es decir, se "corre" hacia la derecha, dejando espacio para el
      //valor que busca ordenarse: variable 'actual'
      arreglo[j + 1] = arreglo[j];
      j--;
    }
    //Cuando se cumple la condición de que 'actual' es mayor o igual 'arreglo[j]', se asigna el valor actual a 'arreglo[j+1]'
    arreglo[j + 1] = actual;
  }

  return arreglo;
}

function descendente(arreglo) {
  for (let i = arreglo.length - 2; i >= 0; i--) {
    //Se asigna el valor en la posición 'i' a la variable 'actual'.
    let actual = arreglo[i];
    //La variable 'j' toma el valor 'i'
    let j = i;

    //Mientras 'j' sea menor al largo del arreglo-1 y el valor 'actual' sea menor al de 'arreglo[j+1]' continúa el loop
    while (j < arreglo.length - 1 && actual < arreglo[j + 1]) {
      //El valor en 'arreglo[j]' pasa a ser 'arreglo[j+1]', es decir, se "corre" hacia la izquierda.
      arreglo[j] = arreglo[j + 1];
      j++;
    }
    //Cuando se cumple la condición de que el valor de 'actual' es menor al de 'arreglo[j+1]', se asgina el valor actual a 'arreglo[j]'
    arreglo[j] = actual;
  }
  return arreglo;
}

// Ejercicio 2: Función recursiva para encontrar un número dentro de una colección

// La función searchNumber recive como parámetros n: número que se busca y arr: arreglo de números donde se busca.
function searchNumber(n, arr) {
  let number = n;
  let arrCopy = [...arr];
  let i = arrCopy.length;
  if (arrCopy[i - 1] == n) {
    console.log("El número " + n + " está presente en el arreglo");
    return true;
  } else {
    arrCopy.pop();
    searchNumber(number, arrCopy);
  }
}
