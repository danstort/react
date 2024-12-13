import React from 'react';
import { useState } from 'react';

const Contador = (props) => {
    

    const [valorContador, setContador] = useState(+props.contador);
    const [clicks, setClicks] = useState([]);
  

    

    function incrementarContador() {

        console.log('Pulso botón');
        setContador(valorContador + 1);
        setClicks([...clicks, 'i']);
        //setClicks(clicks.concat('i'));
       

    }

    function resetearContador() {

        console.log('Pulso botón');

        setContador(+props.contador);
        setClicks([...clicks, 'r']);
      

    }

    
    const mensaje = (valorContador % 2 == 0) ? 'par' : 'impar';
   

    return (
        <div>

            <h1>{valorContador}</h1>
            <button onClick={incrementarContador}>Incrementa contador </button>

            <button onClick={resetearContador}>Resetea contador </button>
            <h2>{mensaje} </h2>
            <h2>{clicks}</h2>
            <h2>{clicks.length}</h2>
            <h2>Número de clicks en Incrementa contador: {clicks.filter(click => click === 'i').length}</h2>
            <h2>Número de clicks en Resetea contador: {clicks.filter(click => click === 'r').length}</h2>


        </div>)

}

export default Contador;