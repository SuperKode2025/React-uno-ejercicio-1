// src/components/Card/Card.jsx
import './Card.css';

function Card({ title, name, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={`Imagen de ${name}`} className="card-img" />
      <h3 className="card-role">{title}</h3>
      <h2 className="card-title">{name}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;