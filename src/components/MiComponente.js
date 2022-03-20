import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const MiComponente = () => { //funcion
    let receta = { //variable RECETA que incluye el nombre de la receta y los ingredientes.
    ingredientes: ['Salsa casera pomodoro', 'Queso muzzarella o vegetal', 'Tomate fresco en rodajas', 'Ajo salteado', 'Aceitunas', 'Hongos salteados', 'Queso provolone', 'Queso roquefort', 'Queso gouda', 'Orégano']
        };
        const [ingredientes, setIngredientes] = useState(receta.ingredientes)
        const [nuevoIngrediente, setNuevoIngrediente] = useState("")

        const handleKeyDown = event => { //EventHandler se ejecuta cuando se apreta una tecla, estando en el campo de busqueda.
            if (event.key === 'Enter') { //si la tecla que se activo es Enter, realiza la busqueda.
                agregarIngrediente() //Entonces se ejecuta el HandleSearch, definido a continuacion:
            }
        }

        const handleNuevoIngredienteChange = event => {
            setNuevoIngrediente(event.target.value)
        }

        const agregarIngrediente = () => {
            const nuevosIngredientes = [...ingredientes, nuevoIngrediente]
            setIngredientes(nuevosIngredientes)
            setNuevoIngrediente("")
        }

        const quitarIngrediente = index => {
            const nuevosIngredientes = [...ingredientes]
            nuevosIngredientes.splice(index, 1)
            setIngredientes(nuevosIngredientes)
        }

        return ( //este componente retorna o renderea lo siguiente:
            <Fragment>
                <h2>Ingredientes:</h2>
                <ol>
                    {   ingredientes.length > 0 ?
                            ingredientes.map((ingredientes, i) => {
                                    return(
                                        <li key={i}>
                                            {ingredientes}
                                            <Button variant="outline-primary" onClick={() => quitarIngrediente(i)}>Quitar</Button>
                                        </li>
                                    );
                            }) :
                            <p>No hay ningún ingrediente. Por favor agregá uno o más.</p>
                    }
                </ol>
                <div>
                    <Form.Control value={nuevoIngrediente} onChange={handleNuevoIngredienteChange} onKeyDown={handleKeyDown} />
                    <Button variant="outline-primary" onClick={agregarIngrediente}>Agregar ingrediente</Button>
                </div>
            </Fragment>
        );
    }


export default MiComponente;
//export default MiComponente al final luego de escribir el componente.