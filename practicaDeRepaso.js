/*function sumatoriaBajoImporte(importes) {
    let suma = 0;
  
    for (let i = 0; i < importes.length; i++) {
      if (importes[i] > 0 && importes[i] <= 1000) {
        suma += importes[i];
      }
    }
  
    return suma;
  }
  
  // Ejemplo de uso:
  const gananciasMensuales = [500, 1200, -300, 800, 1500];
  const resultado = sumatoriaBajoImporte(gananciasMensuales);
  console.log(resultado);  // La función devolverá la suma de los importes que cumplen las condiciones.*/
  
  /*function asientosDisponibles(asientos, asientoSolicitado) {
    if (asientos.includes(asientoSolicitado)) {
      return `Felicitaciones, el asiento número ${asientoSolicitado} está disponible`;
    } else {
      return `Lo siento, el asiento número ${asientoSolicitado} no está disponible`;
    }
  }
  
  // Ejemplo de uso:
  const resultado = asientosDisponibles([15, 28, 44, 45, 70], 15);
  console.log(resultado);*/

  /*function asientosDisponibles(asientos, asientoSolicitado) {
    if (asientos.includes(asientoSolicitado)) {
      return "Lo sentimos, el asiento número " + asientoSolicitado + " está ocupado, pero aún quedan " + asientos.length + " asientos disponibles";
    } else {
      return "Felicitaciones, el asiento número " + asientoSolicitado + " está disponible";
    }
  }
  
  // Ejemplo de uso:
  const resultado = asientosDisponibles([3, 15, 18, 25, 78], 78);
  console.log(resultado);*/

  /*function asientosDisponibles(asientos, asientoSolicitado) {
    if (asientos.includes(asientoSolicitado)) {
      return "Lo sentimos, el asiento número " + asientoSolicitado + " está ocupado, pero aún quedan " + asientos.length + " asientos disponibles";
    } else {
      return "Felicitaciones, el asiento número " + asientoSolicitado + " está disponible";
    }
  }
  
  console.log(asientosDisponibles([3, 15, 18, 25], 25));  // Debería imprimir: "Felicitaciones, el asiento número 25 está disponible"
  console.log(asientosDisponibles([3, 15, 18, 25], 78));  // Debería imprimir: "Lo sentimos, el asiento número 78 está ocupado, pero aún quedan 4 asientos disponibles"
  console.log(asientosDisponibles([3, 15, 18, 25, 35], 78));  // Debería imprimir: "Lo sentimos, el asiento número 78 está ocupado, pero aún quedan 5 asientos disponibles"
  console.log(asientosDisponibles([3, 15, 18, 25], 18));  // Debería imprimir: "Felicitaciones, el asiento número 18 está disponible"*/

  
  
  