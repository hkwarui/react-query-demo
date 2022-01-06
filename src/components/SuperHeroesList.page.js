import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const SuperHeroesListPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encoutering an error ", error);
  };
  const { data, isLoading, isError, error, refetch } = useSuperHeroesData(
    onSuccess,
    onError,
    false
  );

  console.log({ data });
  if (isLoading) return "Loading ...";

  if (isError) return <h2>{error.mesage}</h2>;

  return (
    <div>
      <h2>List of super heroes </h2>
      <button onClick={refetch}>Fetch Super Heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            {hero.name} - {hero.alterEgo}
          </div>
        );
      })}
    </div>
  );
};
