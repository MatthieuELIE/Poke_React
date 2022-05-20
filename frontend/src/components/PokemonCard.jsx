import React from "react";

export default function PokemonCard({ id, name, image, type }) {
  return (
    <div
      className={`w-56 ${type} p-2 m-2 flex flex-col justify-center items-center border-4 border-black rounded-xl`}
    >
      <div className="mb-2">
        <img
          className="object-center object-cover rounded-full"
          src={image}
          alt={name}
        />
      </div>
      <div className="text-center poppins">
        <p className="text-xl text-gray-900 font-bold mb-2">#{id}</p>
        <p className="text-base text-gray-800 font-normal capitalize">{name}</p>
      </div>
    </div>
  );
}
