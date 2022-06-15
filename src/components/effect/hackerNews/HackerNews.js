import React, { useEffect, useRef, useState } from "react";
import { getApi } from "../../../api/api";
import lodash from "lodash";

const HackerNews = () => {
  const [hists, setHists] = useState([]);
  const [inputValue, setInputValue] = useState("react");
  const [loading, setLoading] = useState(true);
  
  const isMounted = useRef(true);
  const handleCallAPi = useRef({});
  const enpoint = `https://hn.algolia.com/api/v1/search?query=${inputValue}`;
  

  useEffect(() => {
    isMounted.current = false;
  }, [inputValue]);

  useEffect(() => {
    return () => {};
  }, []);

  handleCallAPi.current = async () => {
    setLoading(true);
    try {
      const response = await getApi(enpoint);
      if (isMounted) {
        setLoading(false);
        setHists(response.hits);
      }
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setTimeout(() => {
        alert(error);
      }, 1500);
    }
  };

  const handleInput = lodash.debounce((e) => {
    setInputValue(e.target.value);
  }, 1000);

  return (
    <div className="flex flex-col w-[500px] mx-auto my-10">
      <input
        className="p-4"
        type="text"
        defaultValue={inputValue}
        placeholder="search course"
        onChange={(e) => handleInput(e)}
      />
      <div className="flex flex-wrap gap-2 mt-5 bg-[#222] items-center p-3">
        {loading && (
          <div className="w-12 h-12 rounded-full m-auto border-4 border-r-transparent border-[#29f9] animate-spin "></div>
        )}

        {!loading &&
          hists.length > 0 &&
          hists.map((item) => (
            <h3 key={item.objectID} className="bg-[#444] p-2 text-white">
              {item._highlightResult?.title?.value}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
