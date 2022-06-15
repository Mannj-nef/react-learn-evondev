import React, { useEffect, useRef, useState } from "react";
import { getApi } from "../../../api/api";
import useDebounce from "../../../hooks/useDebounce";
import Input from "../Input";
import MovieItem from "./MovieItem";
import MovieLoading from "./MovieLoading";

// https://api.themoviedb.org/3/movie/550?api_key=a4bf361f5cdff62a8cda329a39cc0303
// https://api.themoviedb.org/3/search/movie?api_key=a4bf361f5cdff62a8cda329a39cc0303&query=%22thor%22
const MovieSrearchApp = () => {
  const [movieList, setMovieList] = useState([]);
  const [queryValue, setQueryValue] = useState("");
  const debounceValue = useDebounce(queryValue, 1000);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef();
  const isMounted = useRef(true);
  const timer = useRef();

  useEffect(() => {
    inputRef.current.focus();
    return () => (isMounted.current = false);
  }, []);
  useEffect(() => {
    async function callApi() {
      try {
        setIsLoading(true);
        const data = await getApi(
          `https://api.themoviedb.org/3/search/movie?api_key=a4bf361f5cdff62a8cda329a39cc0303&query='${debounceValue}'`
        );
        timer.current = setTimeout(() => {
          if (isMounted.current) {
            setIsLoading(false);
            setMovieList(data?.results);
          }
        }, 500);
      } catch (error) {
        console.log(error);
      }
    }
    callApi();
    return () => {
      clearTimeout(timer.current);
      console.log("clean upp");
    };
  }, [debounceValue]);

  return (
    <div className="">
      <Input
        ref={inputRef}
        name="searchMovie"
        placeholder="Search movie"
        valueInput={queryValue}
        handleChangeInput={(e) => setQueryValue(e.target.value)}
      ></Input>
      {isLoading && (
        <div className="mt-[137px] grid grid-cols-3 gap-[50px] px-[50px] bg-white">
          <MovieLoading></MovieLoading>
          <MovieLoading></MovieLoading>
          <MovieLoading></MovieLoading>
        </div>
      )}

      <div className="mt-[137px] grid grid-cols-3 gap-[50px] px-[50px] bg-white ">
        {!isLoading && movieList.length > 0 ? (
          movieList.map((item) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))
        ) : (
          <div className="relative max-w-[500px] left-[50%]  translate-x-2/4">
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSrearchApp;
