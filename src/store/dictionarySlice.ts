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
  },
});

export const { addWord, deleteWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
