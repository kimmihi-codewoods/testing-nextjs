import { useQuery } from "react-query";

import { getLanguages } from "../api";

export interface LanguagesHooksReturn {
  data: string[] | undefined;
  isLoading?: boolean;
}

const useLanguages = (keyword: string): LanguagesHooksReturn => {
  const { data, isLoading } = useQuery(["/languages", keyword], () =>
    getLanguages(keyword)
  );

  return { data, isLoading };
};

export default useLanguages;
