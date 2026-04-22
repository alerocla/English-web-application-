import { useEffect, useRef, useState } from "react";
import type { IWord } from "../types/word.ts";

interface Props {
  word: IWord;
  getWord: () => void;
}

const TrainingInput: React.FC<Props> = ({ word, getWord }) => {
  const [inp, setInp] = useState("");
  const [correct, setCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCheck = () => {
    if (inp.trim().toLowerCase() === word.en.toLowerCase()) {
      alert("Correct!");
      setInp("");
      setCorrect(true);
      getWord();
    } else {
      setCorrect(false);
      alert("Wrong word");
      setInp("");
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      {correct ? (
        <h2>Yes, you alright</h2>
      ) : (
        <h2 className="text-red-500"> No, think again</h2>
      )}
      <input
        ref={inputRef}
        className="bg-blue-50 p-2 border rounded-lg shadow-2xs"
        placeholder="word..."
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold rounded-xl shadow-md transition-all duration-200"
        onClick={handleCheck}
      >
        Enter
      </button>
    </div>
  );
};

export default TrainingInput;
