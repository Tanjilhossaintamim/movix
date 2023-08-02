import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjYzMmEwZjZmM2JhNmNlYWI0YzdmNTM2MjVkOTkwYSIsInN1YiI6IjY0YzVlMDAyOWI2ZTQ3MDBhZDJhOTBmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.riDmPzXydVadBJFvYwsCn0qM4Lo6F2Y6o9Nl82QXBGY";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
