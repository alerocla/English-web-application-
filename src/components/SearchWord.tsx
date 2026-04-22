import React, { useEffect, useRef, useState } from "react";
import { useGetWordInfoQuery } from "../store/dictionaryQuery.ts";
import WordSearchCard from "./WordSearchCard.tsx";

const SearchWord: React.FC = () => {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
          ref={inputRef}
          className=" p-1 border rounded-lg"
          placeholder="search...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold rounded-xl shadow-md transition-all duration-200"
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
