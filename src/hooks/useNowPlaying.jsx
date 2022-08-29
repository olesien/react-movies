import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useNowPlaying(page) {
    //Fetch currently in cinema, but if page switches, keep previous data
    return useQuery(["nowplaying", page], MoviesAPI.getNowPlaying, {
        keepPreviousData: true,
    });
}
