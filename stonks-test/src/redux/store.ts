import { configureStore, Middleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducers";
import { createWrapper } from "next-redux-wrapper";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function saveToLocalStorage(state: any, key: string) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage(key: string) {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  saveToLocalStorage(state, "persistantState");
  return result;
};

const preloadedState = loadFromLocalStorage("persistantState");

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});


export const makeStore = () => configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware),
  });
  // Create the wrapper using the makeStore function
export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV === "development" });


