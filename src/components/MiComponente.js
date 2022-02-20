import React from 'react';

class MiComponente extends React.Component{

        render() {
            let receta = {
                nombre: 'Pizza',
                ingredientes: ['Salsa casera pomodoro', 'Queso muzzarella o vegetal', 'Tomate fresco en rodajas', 'Ajo salteado', 'Aceitunas']
            };


        return (
            <React.Fragment>
            <h1>{receta.nombre}</h1>
            <h2>Estos son los ingredientes:</h2>
            <ol>
            {
                receta.ingredientes.map((ingredientes, i) => {
                        console.log(ingredientes);
                        return(
                            <li key={i}>
                                {ingredientes}
                            </li>
                        );
                })
            }
            </ol>
            </React.Fragment>
        );
    }
}

export default MiComponente;