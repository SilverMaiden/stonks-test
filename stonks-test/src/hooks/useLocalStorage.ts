import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const fetchDataFromLocalStorage = async () => {
      try {
        const item = window.localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.error(
          `Error getting data from local storage for key "${key}":`,
          error
        );
        setStoredValue(initialValue);
      } finally {
        setHasHydrated(true);
      }
    };

    fetchDataFromLocalStorage();
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;

    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(
        `Error setting data in local storage for key "${key}":`,
        error
      );
    }
  }, [key, storedValue, hasHydrated]);

  return [storedValue, setStoredValue];
}
