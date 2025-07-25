import { FunctionComponent } from "react";
import { Repository } from "../hooks/types";

interface StatsBarProps {
  repositories: Repository[];
  favoriteCount: number;
}

const StatsBar: FunctionComponent<StatsBarProps> = ({ repositories, favoriteCount }) => {
  const totalStars = repositories.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repositories.reduce((acc, repo) => acc + repo.forks_count, 0);
  const languages = new Set(repositories.filter(repo => repo.language).map(repo => repo.language));

  return (
    <div className="stats-bar">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">{repositories.length}</div>
          <div className="stat-label">Repositories</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{favoriteCount}</div>
          <div className="stat-label">Favorites</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{totalStars}</div>
          <div className="stat-label">Total Stars</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{totalForks}</div>
          <div className="stat-label">Total Forks</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{languages.size}</div>
          <div className="stat-label">Languages</div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
