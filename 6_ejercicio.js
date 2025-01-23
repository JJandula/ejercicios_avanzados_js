

/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante. */


const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];


  function Swap(list,position1,position2){
        let saveFantastic = list[position1]
        list[position1] = list[position2]
        list[position2] = saveFantastic
        
  }

  Swap(fantasticFour,0,2)

  console.log(fantasticFour)