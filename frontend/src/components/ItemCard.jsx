import React from "react";

export default function PokemonCard({ id, name, image }) {
  return (
    <div className="w-56 p-2 m-2 flex flex-col justify-center items-center border-4 border-black rounded-xl hover:opacity-80 hover:scale-105 duration-700 ease-in-out">
      <div className="mb-2">
        <img
          className="object-center object-cover rounded-full"
          src={image}
          alt={name}
        />
      </div>
      <div className="text-center poppins">
        <p className="text-xl text-gray-900 font-bold mb-2">#{id}</p>
        <h3 className="text-base text-gray-800 font-normal capitalize">
          {name}
        </h3>
      </div>
    </div>
  );
}
