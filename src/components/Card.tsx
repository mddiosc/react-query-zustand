import { FunctionComponent } from "react";
import { Repository } from "../hooks/types";
import { useFavoriteResposStore } from "../store/favoriteRepos";

interface CardProps {
  repository: Repository;
  isFavorite: boolean;
}

const Card: FunctionComponent<CardProps> = ({ repository, isFavorite }) => {
  const addFavoriteRespo = useFavoriteResposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteResposStore(
    (state) => state.removeFavoriteRepo
  );

  const toogleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    }
    addFavoriteRespo(repository.id);
  };

  return (
    <div>
      <h1>{repository.name}</h1>
      <p>{repository.description}</p>
      <button onClick={toogleFavorite}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};

export default Card;
