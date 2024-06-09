import { useQuery } from "@apollo/client";
import { QUERY_HELMETS } from "../utils/queries";
import ItemList from "../components/ItemList";

const Home = () => {
  const { loading, data } = useQuery(QUERY_HELMETS);
  let helmets = data?.helmets || [];

  return <>{loading ? <p>loading...</p> : <ItemList helmets={helmets} />}</>;
};

export default Home;
