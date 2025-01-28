import { createContext, useContext, useState, useEffect } from "react";

import Loader from "../components/Loader";

import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_MOVIE_URL;

  const toggleLoader = (state) => {
    setIsLoading(state);
  };

  const fetchMovies = () => {
    toggleLoader(true);

    axios
      .get(apiUrl)
      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error during API call:", err);
      })
      .finally(() => {
        toggleLoader(false);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <GlobalContext.Provider value={{ movies, apiUrl, isLoading, toggleLoader }}>
      {isLoading && <Loader />}
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobalContext };
