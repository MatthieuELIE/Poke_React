import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ItemCard from "@components/ItemCard";

import { fetchItems, fetchItemByUrl } from "@services/api";

export default function PokemonList() {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(async () => {
    const getItems = await fetchItems(20, offset);

    getItems.forEach(async (item) => {
      const itemData = await fetchItemByUrl(item.url);
      setItems((oldItems) => [...oldItems, itemData]);
    });
  }, [offset]);

  return (
    <div className="bg-amber-100 my-12">
      <h1 className="font-bold text-center text-3xl p-6 poppins">Items List</h1>
      <div className="flex flex-wrap w-2/3 md:w-3/4 mx-auto justify-center text-center">
        {items
          .sort((a, b) => a.id - b.id)
          .map((item) => (
            <Link to={`/item/${item.id}`} key={item.id}>
              <ItemCard
                id={item.id}
                name={item.name}
                image={item.sprites.default}
              />
            </Link>
          ))}
        <div className="w-full">
          <button
            onClick={() => setOffset(offset + 20)}
            type="button"
            className="font-bold text-center text-xl px-8 py-2 m-4 poppins hover:opacity-50 hover:scale-105 duration-700 ease-in-out border-2 border-black rounded-full"
          >
            Load More Items...
          </button>
        </div>
      </div>
    </div>
  );
}
