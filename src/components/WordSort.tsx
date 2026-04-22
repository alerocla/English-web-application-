import React from "react";
import type { IWord } from "../types/word.ts";

interface Props {
  setFilterStatus: (status: IWord["status"] | "") => void;
}

const WordSort: React.FC<Props> = ({ setFilterStatus }) => {
  const statuses: IWord["status"][] = ["new", "learning", "learned"];
  return (
    <select
      className="p-2 border rounded-lg bg-white shadow-sm"
      onChange={(e) => setFilterStatus(e.target.value as IWord["status"] | "")}
    >
      <option value="">All Words</option>
      {statuses.map((status) => (
        <option key={status} value={status}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default WordSort;
