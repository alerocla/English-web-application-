import { useState } from "react";
import ListWords from "../components/ListWords.tsx";
import SearchWord from "../components/SearchWord.tsx";
import WordSort from "../components/WordSort.tsx";
import type { IWord } from "../types/word.ts";

const MainPage: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<IWord["status"] | "">("");
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <SearchWord />
        <WordSort setFilterStatus={setFilterStatus} />
      </div>
      <ListWords filterStatus={filterStatus} />
    </div>
  );
};

export default MainPage;
