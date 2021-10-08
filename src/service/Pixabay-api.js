import axios from "axios";
const API_KEY = "21418455-02afedd09f38bf37a8407aa32";
const BASE_URL = "https://pixabay.com/api";
const fetchPictures = ({ searchImage = "", currentPage = 1 }) => {
  return axios
    .get(
      `${BASE_URL}/?q=${searchImage}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default fetchPictures;
