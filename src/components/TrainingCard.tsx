import React from "react";
import type { IWord } from "../types/word.ts";

interface Props {
  word: IWord;
}

const TrainingCard: React.FC<Props> = ({ word }) => {
  return (
    <div className="flex align-center justify-center mt-50 bg-blue-50 p-12 rounded-2xl border shadow-2xl">
      {word ? (
        <div>
          <h2>{word.definition}</h2>
        </div>
      ) : (
        <h2>You don't have any words in the dictionary</h2>
      )}
    </div>
  );
};

export default TrainingCard;
