import { Fragment, FunctionComponent } from "react";
import Card from "./components/Card";
import StatsBar from "./components/StatsBar";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteResposStore } from "./store/favoriteRepos";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const { data, isLoading, error } = useFetchRepositories("mddiosc");
  const { favoriteReposIds } = useFavoriteResposStore();

  if (isLoading) {
    return (
      <div className="loading">
        Loading repositories...
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading">
        <div style={{ textAlign: 'center' }}>
          <h3>Oops! Something went wrong</h3>
          <p>Unable to fetch repositories. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>🚀 GitHub Repository Explorer</h1>
          <p>Discover and manage your favorite repositories</p>
        </div>
      </header>

      <main className="container">
        {data && data.length > 0 ? (
          <>
            <StatsBar repositories={data} favoriteCount={favoriteReposIds.length} />
            <div className="repos-grid">
              {data.map((repo) => (
                <Card
                  repository={repo}
                  isFavorite={favoriteReposIds.includes(repo.id)}
                  key={repo.id}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <h3>No repositories found</h3>
            <p>There are no public repositories to display at the moment.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
