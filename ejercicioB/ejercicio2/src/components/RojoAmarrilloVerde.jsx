
import React from 'react';
import { useState } from 'react';

const rojoAmarilloVerde = () => {   

    const [pRojo, setPRojo] = useState(+0);
    const [pAmarillo, setPAmarillo] = useState(0);
    const [pVerde, setPVerde] = useState(0);
    const [botones, setBotones] = useState({total:0, porRojo: 0, porAmarillo: 0, porVerde: 0});


    function incrementarRojo(){

        setPRojo(pRojo + 1);
        setBotones({...botones, total: botones.total + 1});
    }

    function incrementarAmarillo(){
            
            setPAmarillo(pAmarillo + 1);
            setBotones({...botones, total: botones.total + 1});
        }

    function incrementarVerde(){
                
                setPVerde(pVerde + 1);
                setBotones({...botones, total: botones.total + 1, porVerde: ((pVerde)/botones.total)*100});
                
            }

    function porcentajeTotales(){

        setBotones({...botones, porRojo: (pRojo/botones.total)*100, porAmarillo: (pAmarillo/botones.total)*100, porVerde: (pVerde/botones.total)*100});
    }
    
    

    return (
        <div>
            
            <button onClick={incrementarRojo} style={{backgroundColor: 'red', color: 'white'}}>Rojo</button>
            <button onClick={incrementarAmarillo} style={{backgroundColor: 'yellow', color: 'black'}}>Amarillo</button>
            <button onClick={incrementarVerde} style={{backgroundColor: 'green', color: 'white'}}>Verde</button>

            <h2>{pRojo}</h2>
            <h2>{pAmarillo}</h2>
            <h2>{pVerde}</h2>
            <h2>{botones.total}</h2>
            <h2>{botones.porRojo}</h2>
            <h2>{botones.porAmarillo}</h2>
            <h2>{botones.porVerde}</h2>

        </div>
    )
}

export default rojoAmarilloVerde;