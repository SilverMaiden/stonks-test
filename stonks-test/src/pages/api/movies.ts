// pages/api/movies.ts
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.API_KEY || "";
const API_URL = process.env.API_URL || "";
const RAPIDAPI_HOST = "online-movie-database.p.rapidapi.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { query } = req;
    const response = await axios.get(`${API_URL}/title/find`, {
      headers: {
        "x-rapidapi-key": API_KEY,
      },
      params: {
        ...query,
        api_key: API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
}
