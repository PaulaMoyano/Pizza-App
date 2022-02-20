import pizza from './assets/imagenes/pizza.png'
import './App.css';
import MiComponente from './components/MiComponente';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    alert("Hola mundo con react! Hoy vamos a cocinar!")
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={pizza} className="App-logo" alt="logo" />
        <p>
          Hola! La receta de hoy es:
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=mPXcE9oQwJU"
          target="_blank"
          rel="noopener noreferrer"
        >
          Video con receta
        </a>

          <section className ="componentes">
                <MiComponente />
          </section>

      </header>
    </div>
  );
}

export default App;
