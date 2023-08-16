import React, { useEffect, useState } from "react";
import "./Search.css";
import { SearchIcon } from "../assets/icons";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDlkNGY5ZjQ5ODY5Nzg5Yjc4NDVlMTI5NmYzMTIwZiIsInN1YiI6IjY0ZGJjYjllNzcxOWQ3MDEwMjUyNjczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s5KYJlbSREdtwY1YI7HnaNxEscM8_CTihtxaZvamX9A",
    },
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const getData = setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    }, 2000);

    return () => clearTimeout(getData);
  }, [searchTerm]);

  return (
    <>
      <SearchIcon />
      <input
        onChange={handleChange}
        className="input-text"
        type="text"
        placeholder="Search"
      />
    </>
  );
};

export default Search;
