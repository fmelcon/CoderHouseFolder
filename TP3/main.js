// Consigna: tomando como base el ejemplo anterior de la estructura for que recorre los días de semana, realiza algunas adaptaciones.
// Aspectos a incluir en el entregable:
// Crea un algoritmo que, dado una lista de días, lo recorra e indique los números que son pares.
// En el mismo algoritmo, antes de la condición anterior, incorpora un condicional, donde si el día es el número 7, imprima un alert con un mensaje personalizado.

// TP°3

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const esPar = (value) => value % 2 === 0;

const diasSemana = (dias) => {

  for (let i = 0; i < 7; i++) {
    const dia = i -1;

    console.log(esPar(dia) ? `${dias[i]} Es par` : `${dias[i]} Es impar!`);
    if (i === 6) alert(`El dia ${dias[i]} es el ultimo dia de la semana!!`);
  }
  
};

diasSemana(dias);
