import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API;

export const getLanguages = async (keyword: string): Promise<string[]> => {
  const res = await axios.get(`${BASE_URL}/languages`, {
    params: { keyword },
  });
  console.log(res);
  return res.data;
};
