import React from "react";

export default function PokemonCard({ id, name, image }) {
  return (
    <div className="w-1/5 bg-gradient-to-br from-amber-200 to-amber-400 p-2 m-2 flex flex-col justify-center items-center border-4 border-black rounded-xl">
      <div className="mb-2">
        <img
          className="object-center object-cover rounded-full h-36 w-36"
          src={image}
          alt={name}
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-gray-900 font-bold mb-2">#{id}</p>
        <p className="text-base text-gray-600 font-normal capitalize">{name}</p>
      </div>
    </div>
  );
}
