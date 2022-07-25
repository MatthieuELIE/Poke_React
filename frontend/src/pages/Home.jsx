import React from "react";

import SearchBar from "@components/SearchBar";

import Pikachu from "@assets/Pikachu.png";

export default function Home() {
  return (
    <div className="bg-amber-100 flex flex-col mt-36">
      <h1 className="m-auto  text-3xl md:text-6xl font-bold mt-12 poppins">
        Welcome on Poke-React
      </h1>
      <SearchBar />
      <img
        src={Pikachu}
        alt="PikachuTropBg"
        className="mx-auto fixed bottom-0 right-0 left-0 z-10"
      />
    </div>
  );
}
