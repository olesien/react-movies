import useMovie from "../../hooks/useMovie";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";

import { NavLink } from "react-router-dom";
import Actors from "./Actors";
import SimilarMovies from "./SimilarMovies";

import RenderDetails from "../RenderDetails";

export default function Movie({ id }) {
    const { movie: data } = useMovie(id);
    const { isLoading, isPreviousData, isError, error, data: movie } = data;

    if (isError) {
        return <WarningAlert errorMessage={error.message} />;
    }
    if (isLoading) {
        return <BasicSpinner />;
    }
    console.log(movie);
    return (
        <RenderDetails
            data={{
                title: movie.title,
                image_url: movie.backdrop_path,
                overview: movie.overview,
            }}
            misc={[
                {
                    name: "Release",
                    info: movie.release_date,
                },
                {
                    name: "Populairty",
                    info: movie.popularity,
                },
                {
                    name: "Rating",
                    info: Math.round(movie.vote_average * movie.vote_count),
                },
                {
                    name: "Revenue",
                    info: movie.revenue,
                },
                {
                    name: "Revenue",
                    info: movie.genres.map((genre) => (
                        <span key={genre.id}>
                            <NavLink to={"/category/" + genre.id}>
                                {genre.name}
                            </NavLink>
                            ,
                        </span>
                    )),
                },
            ]}
            leftslot={<SimilarMovies id={id} />}
            rightslot={<Actors id={id} />}
        />
    );
    // return (
    //     <div className="movieContainer">
    //         <div className="left">
    //             <Image
    //                 src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
    //                 className="thumbnail rounded "
    //                 alt={`Image of the movie ${movie.title}`}
    //             />
    //             <RenderMisc
    //                 data={[
    //                     {
    //                         name: "Release",
    //                         info: movie.release_date,
    //                     },
    //                     {
    //                         name: "Populairty",
    //                         info: movie.popularity,
    //                     },
    //                     {
    //                         name: "Rating",
    //                         info: Math.round(
    //                             movie.vote_average * movie.vote_count
    //                         ),
    //                     },
    //                     {
    //                         name: "Revenue",
    //                         info: movie.revenue,
    //                     },
    //                     {
    //                         name: "Revenue",
    //                         info: movie.genres.map((genre) => (
    //                             <span key={genre.id}>
    //                                 <NavLink to={"/category/" + genre.id}>
    //                                     {genre.name}
    //                                 </NavLink>
    //                                 ,
    //                             </span>
    //                         )),
    //                     },
    //                 ]}
    //             />
    //             <SimilarMovies id={id} />
    //         </div>
    //         <div className="right">
    //             <h1>{movie.title}</h1>
    //             <p>{movie.overview}</p>
    //             <Actors id={id} />
    //         </div>
    //     </div>
    // );
}
