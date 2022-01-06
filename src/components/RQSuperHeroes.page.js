// Fetching Data with useQuery
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encoutering an error ", error);
  };
  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData(
    onSuccess,
    onError
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    console.log({ error });
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page </h2>
      {data?.data.map((hero) => {
        return (
          <Link to={`/super-heroes/${hero.id}`}>
            <div key={hero.id}>{hero.name}</div>
          </Link>
        );
      })}
    </>
  );
};
