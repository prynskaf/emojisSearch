import React from "react";
import { useState } from "react";
import EmojisList from "../EmojisList/EmojisList";

export default function EmojisFilter() {
  const [filter, setFilter] = useState("");
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className="">
      <input
        className=" rounded-lg  m-auto w-[70%] p-5 bg-yellow-400 text-center flex justify-center"
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter Emojis"
      />
      <EmojisList filter={filter} />
    </div>
  );
}
