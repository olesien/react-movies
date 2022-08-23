import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useNowPlaying(page) {
    return useQuery(["nowplaying", page], MoviesAPI.getNowPlaying, {
        keepPreviousData: true,
    });
}
