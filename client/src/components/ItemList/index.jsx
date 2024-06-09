import { Link } from "react-router-dom";
import "./style.css";

const ItemList = ({ helmets }) => {
  return (
    <div className="display">
      {helmets.map((helmet) => (
        <div key={helmet._id} className="card">
          <Link to={`/items/${helmet._id}`}>
            <img
              src={`/images/${helmet.image}`}
              alt={`screenshot of ${helmet.name}`}
              width="200"
            />
          </Link>
          <h3>{helmet.name}</h3>
          <p>{helmet.description}</p>
          <p>${helmet.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
