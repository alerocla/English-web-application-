import React, { useCallback, useEffect, useState } from "react";
import TrainingCard from "../components/TrainingCard.tsx";
import TrainingInput from "../components/TrainingInput.tsx";
import { useAppSelector } from "../store/store.ts";
import type { IWord } from "../types/word.ts";

const TrainingPage: React.FC = () => {
  const words = useAppSelector((state) => state.dictionary.words);
  const [randomWord, setRandomWord] = useState<IWord | null>();

  const getWord = useCallback(() => {
    if (words.length > 0) {
      const randomIndex = Math.floor(Math.random() * words.length);
      setRandomWord(words[randomIndex]);
    }
  }, [words]);

  useEffect(() => {
    if (words.length > 0 && !randomWord) {
      getWord();
    }
  }, [words.length, randomWord, getWord]);

  if (words.length === 0) {
    return <h2>You don't have any words in the dictionary</h2>;
  }

  if (!randomWord) return <h2>Loading...</h2>;
  return (
    <div className="flex align-center justify-center">
      <div className="flex flex-col gap-6">
        <TrainingCard word={randomWord} />
        <TrainingInput word={randomWord} getWord={getWord} />
      </div>
    </div>
  );
};

export default TrainingPage;
