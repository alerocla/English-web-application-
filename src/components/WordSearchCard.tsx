import React from "react";
import type { IWord } from "../types/word.ts";
import { useAppDispatch, useAppSelector } from "../store/store.ts";
import { addWord } from "../store/dictionarySlice.ts";

interface Props {
  word: IWord;
}

const WordSearchCard: React.FC<Props> = ({ word }) => {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.dictionary.words);
  const findWord = words.find((item) => item.en === word.en);
  return (
    <div className="flex flex-col items-center justify-center mt-5 ">
      <p className="font-mono mb-2">
        {findWord ? "Definition is added to" + " dictionary" : word.definition}
      </p>
      {!findWord && (
        <button
          className="border rounded-lg p-2 hover:bg-gray-100 transition delay-100 cursor-pointer"
          onClick={() => dispatch(addWord(word))}
        >
          Add to dictionary
        </button>
      )}
    </div>
  );
};

export default WordSearchCard;
