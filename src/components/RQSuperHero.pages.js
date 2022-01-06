import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export const RQSuperHero = () => {
  const { heroId } = useParams();

  const { data, isLoading, isError, error } = useSuperHeroData(heroId);

  console.log({ data });

  if (isLoading) return <div>Loading ...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h2>Super Hero Details</h2>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};
