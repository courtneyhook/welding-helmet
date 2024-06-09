import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_HELMET } from "../utils/queries";

export const ItemView = () => {
  const { id } = useParams();

  const { data } = useQuery(QUERY_SINGLE_HELMET, {
    variables: { id },
  });

  const item = data?.helmet || {};

  return (
    <>
      <div key={item._id}>
        <h5>
          <Link to="/">⇽ Go Back</Link>
        </h5>
        <h1>{item.name}</h1>
        <img
          src={`/images/${item.image}`}
          alt={`screenshot of ${item.name}`}
          width="400"
        />
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </>
  );
};

export default ItemView;
