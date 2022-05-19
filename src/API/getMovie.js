import * as axios from "axios";

const instanceMovieList = axios.create({
    baseURL: "https://yts.mx/api/v2/list_movies.json" },
);

export const movieAPI = {
    getMovieList(currentPage = 1, pageLimit = 12) {
        return instanceMovieList.get(`?page=${currentPage}&limit=${pageLimit}`)
        .then((response) => {
            return response.data;
        });
    }
};