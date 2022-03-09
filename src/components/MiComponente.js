import React, { useState, Fragment } from 'react';

const MiComponente = () => { //funcion
    let receta = { //variable RECETA que incluye el nombre de la receta y los ingredientes.
    nombre: 'Pizza',
    ingredientes: ['Salsa casera pomodoro', 'Queso muzzarella o vegetal', 'Tomate fresco en rodajas', 'Ajo salteado', 'Aceitunas', 'Hongos salteados', 'Queso provolone', 'Queso roquefort', 'Queso gouda', 'Orégano']
        };
        const [ingredientes, setIngredientes] = useState(receta.ingredientes)

        const agregarIngrediente = () => {

        }

        const quitarIngrediente = () => {}

        return ( //este componente retorna o renderea lo siguiente:
            <Fragment>
                <h1>{receta.nombre}</h1>
                <h2>Ingredientes:</h2>
                <ol>
                    {
                        ingredientes.map((ingredientes, i) => {
                                console.log(ingredientes);
                                return(
                                    <li key={i}>
                                        {ingredientes}
                                        <button onClick={quitarIngrediente}>Quitar</button>
                                    </li>
                                );
                        })
                    }
                </ol>
                <div>
                    <input></input>
                    <button onClick={agregarIngrediente}>Agregar ingrediente</button>
                </div>
            </Fragment>
        );
    }


export default MiComponente;
//export default MiComponente al final luego de escribir el componente.