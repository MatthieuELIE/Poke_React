import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchOneItemById } from "@services/api";

export default function ItemPage() {
  const [item, setItem] = useState();

  const { itemId } = useParams();

  useEffect(async () => {
    const itemData = await fetchOneItemById(itemId);
    setItem(itemData);
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-amber-200 w-1/4 py-10 px-10 mx-auto my-24 border-4 border-black rounded-xl shadow-lg">
      <div className="flex flex-col justify-center max-w-sm">
        <img
          className="rounded-lg h-36 w-36 p-2 mx-auto"
          src={item.sprites.default}
          alt={item.name}
        />
        <div className="p-6">
          <h3 className="text-gray-900 text-2xl text-center font-semibold mb-4 capitalize">
            {item.name}
          </h3>
          <p className="text-gray-700 text-base text-center">
            {item.effect_entries[0].effect}
          </p>
        </div>
      </div>
    </div>
  );
}
