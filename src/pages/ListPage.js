import React, { useState, useEffect } from "react";
import "./ListPage.css";
import Card from "../components/Card";

const ListPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDlkNGY5ZjQ5ODY5Nzg5Yjc4NDVlMTI5NmYzMTIwZiIsInN1YiI6IjY0ZGJjYjllNzcxOWQ3MDEwMjUyNjczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s5KYJlbSREdtwY1YI7HnaNxEscM8_CTihtxaZvamX9A",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
        options
      );
      const data = await response.json();

      setItems((prevItems) => [...prevItems, ...data.results]);
      console.log(items);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, handleScroll]);

  return (
    <div className="page-wrapper">
      {items.map((item) => (
        <Card
          poster_path={item.poster_path}
          title={item.title}
          rating={item.vote_average}
          overview={item.overview}
        />
      ))}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default ListPage;
