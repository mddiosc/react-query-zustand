import { Fragment, FunctionComponent } from "react";
import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteResposStore } from "./store/favoriteRepos";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const { data, isLoading } = useFetchRepositories("mddiosc");
  const { favoriteReposIds } = useFavoriteResposStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((repo) => (
        <Card
          repository={repo}
          isFavorite={favoriteReposIds.includes(repo.id)}
          key={repo.id}
        />
      ))}
    </div>
  );
};

export default App;
