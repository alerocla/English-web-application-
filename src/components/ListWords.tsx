import React from "react";
import { useAppSelector } from "../store/store.ts";

const ListWords: React.FC = () => {
  const words = useAppSelector((state) => state.dictionary.words);

  return (
    <div className="flex justify-center w-full mt-20">
      <ul className="w-full max-w-md flex flex-col gap-6">
        {words.length > 0 ? (
          words.map((word) => (
            <li key={word.id} className="border-b pb-4">
              <p className="font-bold text-xl ">EN: {word.en}</p>
              <p className="text-gray-600">Definition: {word.definition}</p>
            </li>
          ))
        ) : (
          <h2 className="text-center text-gray-400 italic">
            Your dictionary is empty
          </h2>
        )}
      </ul>
    </div>
  );
};

export default ListWords;
