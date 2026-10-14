import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { MENU_URL } from "../../../config/api";

function DishDetailPage() {
  const { id } = useParams(); // from /dish/:id
  const { data: dishes, isLoading, error } = useFetch(MENU_URL);

  if (isLoading) return <p>Loading dish…</p>;
  if (error) return <p>Could not load dish: {error}</p>;

  const dish = dishes.find((d) => String(d.id) === id);
  if (!dish) return <p>Dish not found.</p>;

  return (
    <div>
      <h2>{dish.name}</h2>
      <p className="dish-price">Rs. {dish.price.toFixed(2)}</p>
      <p>Category: {dish.category}</p>
      <p>{dish.available ? "Available" : "Sold out"}</p>
      <Link to="/">← Back to menu</Link>
    </div>
  );
}

export default DishDetailPage;
