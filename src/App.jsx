import React from 'react';
import ReactDOM from 'react-dom/client';
import Botoncito from './components/Buttons/Botoncito';
import Card from './components/Card/Card';
import './App.css';

function App() {
  const handleClick = (mensaje) => {
    console.log(mensaje);
  };

  return (
    <div>
      <h1>Tarjetas</h1>
      <div className="card-container">
        <Card
          name="Sergio"
          image="https://i.postimg.cc/NKSM0LfZ/sergio.png?text=Sergio"
          description="Amante de los libros de fantasía, los gatos y el café ☕. Siempre buscando nuevas ideas para crear."
        />
        <Card
          name="Julia"
          image="https://i.ibb.co/GfTCRLHz/Julia.png?text=Julia"
          description="Diseñadora gráfica apasionada por el arte digital y los viajes ✈️."
        />
        <Card
          name="Calero"
          image="https://i.ibb.co/Q7jT3bjL/689fd923ecc5bb44778538ed7ea6f314.png?text=Calero"
          description="Programador que vive entre líneas de código y melodías de jazz 🎷."
        />
      </div>

     <div className="botones">
      <h1>Botones</h1>
  <Botoncito
    texto="Haz clic aquí"
    color="skyblue"
    onClick={() => handleClick('¡Haz clic aquí fue presionado!')}
  />
  <Botoncito
    texto="Presióname"
    color="lightgreen"
    onClick={() => handleClick('¡Presióname fue presionado!')}
  />
  <Botoncito
    texto="¡Vamos!"
    color="salmon"
    onClick={() => handleClick('¡Vamos fue presionado!')}
  />
     </div>
    </div>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);