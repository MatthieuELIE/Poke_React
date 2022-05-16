import React from "react";

export default function PokemonCard({ name, url }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{url}</p>
    </div>
  );
}
