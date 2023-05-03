// utils/moviesApi.ts
const API_KEY = "4a41e17602msh766e8491db0f3b9p1e10eajsn06496f91fac4";
const API_URL = "https://online-movie-database.p.rapidapi.com";

const buildUrl = (searchQuery: string) => {
  return `${API_URL}/title/find?q=${searchQuery}&page=1&r=json`;
};

export const fetchData = async (searchQuery: string) => {
  const url = buildUrl(searchQuery);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-RapidAPI-Key": API_KEY,

    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
