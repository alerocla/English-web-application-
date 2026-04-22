import React, { useState } from "react";
import { useGetWordInfoQuery } from "../store/dictionaryQuery.ts";
import WordSearchCard from "./WordSearchCard.tsx";

const SearchWord: React.FC = () => {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, isError } = useGetWordInfoQuery(searchTerm, {
    skip: searchTerm === "",
  });

  const handleButtonSearch = () => {
    if (input.trim()) {
      setSearchTerm(input);
      setInput("");
    }
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <div className="flex gap-2 mb-2">
        <input
          className=" p-1 border rounded-lg"
          placeholder="search...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="border rounded-lg p-2 hover:bg-gray-100 transition delay-100 cursor-pointer"
          disabled={isLoading}
          onClick={handleButtonSearch}
        >
          {isLoading ? "loading..." : "search"}
        </button>
      </div>
      {data && data[0] && (
        <WordSearchCard
          word={{
            id: Date.now().toString(),
            en: data[0].word,
            definition: data[0].meanings[0].definitions[0].definition,
            status: "new",
            createdAt: new Date().toISOString(),
            category: "General",
          }}
        />
      )}
      {isError && <p style={{ color: "red" }}>Word not found!</p>}
    </div>
  );
};

export default SearchWord;
