import { FunctionComponent } from "react";
import { Repository } from "../hooks/types";
import { useFavoriteResposStore } from "../store/favoriteRepos";

interface CardProps {
  repository: Repository;
  isFavorite: boolean;
}

const Card: FunctionComponent<CardProps> = ({ repository, isFavorite }) => {
  const addFavoriteRepo = useFavoriteResposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteResposStore(
    (state) => state.removeFavoriteRepo
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    }
    addFavoriteRepo(repository.id);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      Java: '#ed8b00',
      'C++': '#f34b7d',
      C: '#555555',
      Go: '#00add8',
      Rust: '#dea584',
      PHP: '#777bb4',
      Ruby: '#701516',
      Swift: '#fa7343',
      Kotlin: '#a97bff',
    };
    return colors[language || ''] || '#6c757d';
  };

  return (
    <article className="repo-card">
      <header>
        <h2>
          📁 {repository.name}
          {repository.private && <span style={{ fontSize: '0.8em', opacity: 0.7 }}>🔒</span>}
        </h2>
        <p>{repository.description || 'No description available'}</p>
      </header>

      <div className="repo-info">
        {repository.language && (
          <span>
            <span 
              style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: getLanguageColor(repository.language),
                display: 'inline-block'
              }}
            ></span>
            {repository.language}
          </span>
        )}
        
        <span>
          ⭐ {repository.stargazers_count}
        </span>
        
        <span>
          🍴 {repository.forks_count}
        </span>
        
        {repository.updated_at && (
          <span>
            📅 {formatDate(repository.updated_at)}
          </span>
        )}
      </div>

      <footer>
        <button 
          className={`favorite-btn ${isFavorite ? 'is-favorite' : ''}`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? (
            <>❤️ Remove from favorites</>
          ) : (
            <>🤍 Add to favorites</>
          )}
        </button>
      </footer>
    </article>
  );
};

export default Card;
