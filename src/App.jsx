import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfigration, getGenras } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import PageNoTFound from "./pages/404/PageNoFound";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfigration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenras = {};
    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => {
        allGenras[item.id] = item;
      });
    });
    dispatch(getGenras(allGenras));
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNoTFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
