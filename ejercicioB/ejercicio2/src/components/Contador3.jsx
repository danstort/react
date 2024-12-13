import React, { useReducer } from 'react';

const Contador3 = (props) => {
    function reducer(estado, accion) {
        switch (accion.type) {
            case "IncrementarContador":
                return { contador: estado.contador + 1, clicks: estado.clicks.concat('i') };
            case "DecrementarContador":
                return { contador: estado.contador - 1, clicks: [...estado.clicks, 'd'] };
            case "ResetearContador":
                return { contador: +props.contador, clicks: [...estado.clicks, 'r'] };
            default:
                return estado;
        }
    }

    const [estado, dispatch] = useReducer(reducer, { contador: props.contador, clicks: [] });

    const incrementarContador = () => {
        dispatch({ type: "IncrementarContador" });
    }

    const decrementarContador = () => {
        dispatch({ type: "DecrementarContador" });
    }

    const resetearContador = () => {
        dispatch({ type: "ResetearContador" });
    }

    const mensaje = (estado.contador % 2 === 0) ? 'El contador es par' : 'El contador es impar';

    return (
        <div>
            <p>El valor del contador es: </p>
            <h1>{estado.contador}</h1>
            <button onClick={incrementarContador}>Incrementa contador</button>
            <button onClick={decrementarContador}>Decrementa contador</button>
            <button onClick={resetearContador}>Resetea contador</button>
            <h2>{mensaje}</h2>
            <h2>{estado.clicks}</h2>
            <h2>{estado.clicks.length}</h2>
            <h2>Número de clicks en Incrementa contador: {estado.clicks.filter(click => click === 'i').length}</h2>
            <h2>Número de clicks en Decrementa contador: {estado.clicks.filter(click => click === 'd').length}</h2>
            <h2>Número de clicks en Resetea contador: {estado.clicks.filter(click => click === 'r').length}</h2>
        </div>
    );
}

export default Contador3;