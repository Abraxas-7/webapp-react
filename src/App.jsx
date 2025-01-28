import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { GlobalProvider } from "./context/GlobalContext";

import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/">
              <Route index Component={HomePage} />
              <Route path="/movies/:id" Component={MovieDetailPage} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
