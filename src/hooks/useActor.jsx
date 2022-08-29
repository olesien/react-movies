import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useActor(id) {
    //Get actor and their movies
    const actor = useQuery(["actor", id], MoviesAPI.getActor);
    const actorMovies = useQuery(["actorMovies", id], MoviesAPI.getActorMovies);
    return { actor, actorMovies };
}
