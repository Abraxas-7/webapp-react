import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const apiUrl = import.meta.env.VITE_MOVIE_URL;

  const fetchMovies = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error during API call:", err);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <GlobalContext.Provider value={{ movies, apiUrl }}>
      {children}
    </GlobalContext.Provider>
  );
};
function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobalContext };
