import pizza from './assets/imagenes/pizza.png'
import './App.scss';
import MiComponente from './components/MiComponente';
import { useEffect } from 'react';
import videoPizza from './assets/video-pizza.mp4';


function App() {
  useEffect(() => {
    alert("¡'Hola mundo' con React! ¡Hoy vamos a cocinar!")
  }, [])

  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={videoPizza} type="video/mp4" />
      </video>
      <header className="App-header">
        <img src={pizza} className="App-logo" alt="logo" />
        <p>
          La receta de hoy es: ¡Pizza!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=mPXcE9oQwJU"
          target="_blank"
          rel="noopener noreferrer"
        >
          Video cocinando pizza
        </a>

          <section className ="componentes">
                <MiComponente />
          </section>

      </header>
    </div>
  );
}

export default App;
