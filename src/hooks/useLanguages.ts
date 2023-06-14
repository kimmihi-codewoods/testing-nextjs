import { useQuery } from "react-query";

import { getLanguages } from "../api";

const useLanguages = (keyword: string) => {
  const { data, isLoading } = useQuery(["/languages", keyword], () =>
    getLanguages(keyword)
  );

  return { data, isLoading };
};

export default useLanguages;
