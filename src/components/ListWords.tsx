import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store.ts";
import type { IWord } from "../types/word.ts";
import { MdDeleteForever } from "react-icons/md";
import { deleteWord } from "../store/dictionarySlice.ts";

interface Props {
  filterStatus: IWord["status"] | "";
}

const ListWords: React.FC<Props> = ({ filterStatus }) => {
  const words = useAppSelector((state) => state.dictionary.words);
  const dispatch = useAppDispatch();

  const filteredWords = words.filter((word) => {
    if (filterStatus === "") return true;
    return word.status === filterStatus;
  });

  return (
    <div className="flex justify-center w-full mt-20">
      <ul className="w-full max-w-md flex flex-col gap-6">
        {filteredWords.length > 0 ? (
          filteredWords.map((word) => (
            <li
              key={word.id}
              className="border-b pb-4 flex items-center justify-between"
            >
              <div>
                <p className="font-bold text-xl ">EN: {word.en}</p>
                <p className="text-gray-600">Definition: {word.definition}</p>
              </div>
              <MdDeleteForever
                size={30}
                className="cursor-pointer hover:text-red-500 transition duration-150"
                onClick={() => dispatch(deleteWord(word.id))}
              />
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
