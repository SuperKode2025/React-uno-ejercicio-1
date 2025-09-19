import React from 'react';
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
          title="Escritor Creativo"
          name="Sergio"
          image="https://i.postimg.cc/NKSM0LfZ/sergio.png?text=Sergio"
          description="Amante de los libros de fantasía, los gatos y el café ☕. Siempre buscando nuevas ideas para crear."
        />
        <Card
          title="Diseñadora UX/UI"
          name="Julia"
          image="https://i.postimg.cc/tg44STV2/Julia.png"
          description="Diseñadora gráfica apasionada por el arte digital y los viajes ✈️."
        />
        <Card
          title="Desarrollador Full Stack"
          name="Calero"
          image="https://i.postimg.cc/63D6pfbm/689fd923ecc5bb44778538ed7ea6f314.png"
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