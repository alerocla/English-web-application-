import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IWord } from "../types/word.ts";

interface DictionaryState {
  words: IWord[];
}

const initialState: DictionaryState = {
  words: JSON.parse(localStorage.getItem("words") || "[]") as IWord[],
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    addWord(state, action: PayloadAction<IWord>) {
      state.words.push(action.payload);
      localStorage.setItem("words", JSON.stringify(state.words));
    },
    deleteWord(state, action: PayloadAction<string>) {
      state.words = state.words.filter((word) => word.id !== action.payload);
      localStorage.setItem("words", JSON.stringify(state.words));
    },
    changeWordStatus(
      state,
      action: PayloadAction<{ id: string; status: IWord["status"] }>,
    ) {
      const { id, status } = action.payload;
      const findWord = state.words.find((word) => word.id === id);
      if (findWord) {
        findWord.status = status;
      }
      localStorage.setItem("words", JSON.stringify(state.words));
    },
  },
});

export const { addWord, deleteWord, changeWordStatus } =
  dictionarySlice.actions;
export default dictionarySlice.reducer;
