import React from 'react';
import { useState } from 'react';

const contador2 = () => {
    
    const [contador, setContador] = useState({left: 0, right: 0});

    function incrementarLeft(){

        setContador({...contador, left: contador.left + 1});
    }

    function incrementarRight(){

        setContador({...contador, right: contador.right + 1});
    }

    return (
        <div>
           {contador.left}
           <button onClick={incrementarLeft}>left</button>
           <button onClick={incrementarRight}>right</button>
           
              {contador.right}
        </div>
    );
}

export default contador2;