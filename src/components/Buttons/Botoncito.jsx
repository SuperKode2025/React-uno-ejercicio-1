import './Botoncito.css';

function Botoncito({ texto, color, onClick }) {
  return (
    <button
      className="boton, botoncito"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}

export default Botoncito;