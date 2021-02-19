
// >> Consigna: codifica al menos tres funciones cuyas instrucciones permitan resolver un problema particular, segmentado en tareas. La información a procesar debe ser ingresada por el usuario, y el resultado del procesamiento visualizado en una salida.

  const peso = () => parseFloat(prompt("Ingrese por favor su peso en Kilogramos: "));
const altura = () => parseFloat(prompt("Ingrese por favor su altura en metros: "));

const calculaImc = () => {
  const kg = peso();
  const alt = altura();
  const imc = kg / (alt * alt);

  return Math.round(imc);
};

const comparadorImc = () => {
  const finalIMC = parseInt(calculaImc());

  let mensaje = `Tu IMC es ${finalIMC}`;

  if (finalIMC < 18) mensaje += ` estas Delgado.`;
  if (finalIMC > 18 && finalIMC < 25) mensaje += ` estas en buena forma.`;
  if (finalIMC > 25) mensaje += ` tienes que bajar de peso.`;

  alert(mensaje);
};

comparadorImc();