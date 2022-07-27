import React from "react";

import LikeColor from "@assets/LikeColor.png";
import LikeBlack from "@assets/LikeBlack.png";

export default function FavoritePokemon({ isFavorite, handleClick }) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="w-20 hover:opacity-50 hover:scale-105 duration-700 ease-in-out"
    >
      <img
        src={isFavorite ? LikeColor : LikeBlack}
        alt={isFavorite ? "Favorite" : "NotFavorite"}
      />
    </button>
  );
}
