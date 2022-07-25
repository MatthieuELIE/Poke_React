import React from "react";

import SearchBar from "@components/SearchBar";

export default function Home() {
  return (
    <div className="bg-amber-100 flex flex-col my-36">
      <h1 className="m-auto  text-3xl md:text-6xl font-bold mt-12">
        Welcome on Poke-React
      </h1>
      <div className="my-8">
        <SearchBar />
      </div>
    </div>
  );
}
