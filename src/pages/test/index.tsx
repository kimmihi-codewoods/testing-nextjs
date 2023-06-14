import { useState } from "react";
import useLanguages from "../../hooks/useLanguages";

export default function Test() {
  const [keyword, setKeyword] = useState("");
  const { data } = useLanguages(keyword);
  return (
    <div>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <h2>Languages</h2>
      <ul>
        {data?.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
    </div>
  );
}
