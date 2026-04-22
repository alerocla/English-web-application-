import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "./dictionarySlice";
import { dictionaryApi } from "./dictionaryQuery.ts";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dictionaryApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
