import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';



const Contador4 = (props) => {

const [contador, setContador] = useState(+props.contador);

function incrementarContador(){

    setContador((contador) => contador + 1);
   // setContador(contador + 1);
}

function iniciarContador(){

 setInterval(incrementarContador, 1000);
}



useEffect(iniciarContador, []);



return(

<>

<p>Contador</p>
<h1>{contador}</h1>

</>

)

}

export default Contador4;