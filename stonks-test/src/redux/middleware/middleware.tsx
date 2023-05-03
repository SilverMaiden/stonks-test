import { useLocalStorage } from "@component/hooks/useLocalStorage";
import { Middleware } from "redux";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const [storedState, setStoredState] = useLocalStorage("persistantState", {});

  const result = next(action);

  const newState = store.getState();
  if (newState !== storedState) {
    setStoredState(newState);
  }

  return result;
};

export default localStorageMiddleware;
