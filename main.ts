
const solicitudJugadores = prompt("Introduce el número de jugadores que van a participar: ") + " ";
const numJugadores:number   = parseInt(solicitudJugadores, 10);
const numPreguntas:number = numJugadores * 3; //crea un numero de preguntas que se ajuste al numero de jugadores( 3 cada uno)

type Jugador ={
   nombre:string,
   puntuacion:number
}



function addJugadores(nj:number): Array<Jugador> { //Función que pide al usuario los nombres de los jugadores y devuelve un array de jugadores con los nombre correspondientes.
   const arrJugadores:Array<Jugador> = [];
   arrJugadores.length = nj;
   arrJugadores.fill({nombre:"", puntuacion:0})
   let cont = 1;

   arrJugadores.map( e  =>{
      
      e.nombre = prompt("Introduce el nombre del jugador " + cont + ": ") + " ";
      e.puntuacion = 0;
      cont++;
   });

   
   return arrJugadores;
}

const Jugadores= addJugadores(numJugadores);



//Se le ha añadido numPreguntas al link para que este genere el numero de preguntas adecuadas cada vez.
console.log(fetch("https://opentdb.com/api.php?amount=" +numPreguntas+ "&type=boolean").then((res)=>{res.json().then((res) =>
 {res.results.forEach((element:any) => {
    const respuesta = prompt(element.question);
    if( respuesta === "1" && element.correct_answer === "True") console.log("Correcto, +1 punto");
    else if(respuesta === "2") console.log("Incorrecto");
    else console.log(("Respuesta no válida"));
 });})}));