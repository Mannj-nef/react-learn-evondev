import React, { useEffect, useRef, useState } from "react";
import useHackNewApi from "../../../hooks/useHackNewApi";

const HackerNewsUseHookCustom = () => {
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=''"
  );
  const [inputValue, setInputValue] = useState();
  const { data, loading } = useHackNewApi(url, { hits: [] });

  const inputRef = useRef();

  useEffect(() => {
    const inputR = inputRef.current;
    if (inputR) {
      inputR.value = "";
      inputR.focus();
    }
  }, [url]);

  return (
    <div className="flex flex-col w-[500px] mx-auto my-10">
      <div className="flex justify-between">
        <input
          ref={inputRef}
          className="p-4 border-2 border-solid border-blue-600 flex-1"
          type="text"
          defaultValue={inputValue}
          placeholder="search course"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="border-2border-solid border-blue-600 px-3 border-l-0 bg-blue-600 text-white"
          onClick={() => {
            setUrl(`https://hn.algolia.com/api/v1/search?query=${inputValue}`);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-5 bg-[#222] items-center p-3">
        {loading && (
          <div className="w-12 h-12 rounded-full m-auto border-4 border-r-transparent border-[#29f9] animate-spin "></div>
        )}

        {!loading &&
          data?.hits.length > 0 &&
          data?.hits.map((item) => (
            <h3 key={item.objectID} className="bg-[#444] p-2 text-white">
              {item._highlightResult?.title?.value}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNewsUseHookCustom;
