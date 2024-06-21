import { Link } from "react-router-dom";
import auth from "../../utils/auth";
import "./style.css";

const ItemList = ({ helmets }) => {
  const updateItem = (id) => {
    console.log("updated item", id);
  };

  const deleteItem = (id) => {
    console.log("deleteItem", id);
  };
  return (
    <div className="display">
      {helmets.map((helmet) => (
        <div key={helmet._id} className="card">
          <Link to={`/items/${helmet._id}`}>
            <img
              src={`/images/${helmet.image}`}
              alt={`screenshot of ${helmet.name}`}
              width="300"
            />
          </Link>
          <h3 className="card-text">{helmet.name}</h3>
          <p className="card-text">{helmet.description}</p>
          <p className="card-text">${helmet.price}</p>
          {auth.loggedIn() ? (
            <button onClick={updateItem}>Update</button>
          ) : null}
          <br />
          {auth.loggedIn() ? (
            <button onClick={deleteItem}>Delete</button>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
