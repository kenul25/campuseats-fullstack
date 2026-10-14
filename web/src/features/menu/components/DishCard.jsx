import { Link } from "react-router-dom";

function DishCard({ dish }) {
  return (
    <Link to={`/dish/${dish.id}`} className="dish-card">
      <h3>{dish.name}</h3>
      <p className="dish-price">Rs. {dish.price.toFixed(2)}</p>
      <div className="dish-meta">
        <small>{dish.category}</small>
        {!dish.available && <span className="badge-soldout">Sold out</span>}
      </div>
    </Link>
  );
}

export default DishCard;
