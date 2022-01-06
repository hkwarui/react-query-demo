import { useQuery } from "react-query";
import axios from "axios";

export const ParallelQueriesPage = () => {
  const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends");
  };

  const { data: superheroes } = useQuery("super-heroes", fetchSuperHeroes);

  const { data: friends } = useQuery("friends ", fetchFriends);

  return (
    <div>
      <h2>Heroes </h2>
      {superheroes?.data.map((hero) => {
        return (
          <div>
            {hero.name} - {hero.alterEgo}
          </div>
        );
      })}

      <h2>friends</h2>
      {friends?.data.map((friend) => {
        return <div> {friend.name}</div>;
      })}
    </div>
  );
};
