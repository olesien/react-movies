import useMovie from "../../hooks/useMovie";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import { useMemo, useState } from "react";
import RenderTable from "../RenderTable";
import { Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Actors({ id }) {
    const { credits: data } = useMovie(id);
    const { isLoading, isPreviousData, isError, error, data: actors } = data;
    const [loadedMore, setLoadedMore] = useState(false);
    console.log(actors);
    const columns = useMemo(
        () => [
            {
                Header: "Img",
                Cell: ({ row: { original: actor } }) => (
                    <Image
                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                        className="thumbnail rounded movie-img"
                        alt={`Image of the actor ${actor.name}`}
                    ></Image>
                ),
            },
            {
                Header: "Name",
                Cell: ({ row: { original: actor } }) => (
                    <NavLink
                        to={`/actor/${actor.id}?movieId=${0}&categoryId=${0}`}
                    >
                        {actor.name}
                    </NavLink>
                ),
            },
            {
                Header: "As",
                Cell: ({ row: { original: actor } }) => (
                    <p>Acting as {actor.character}</p>
                ),
            },
        ],
        []
    );
    if (isError) {
        return <WarningAlert errorMessage={error.message} />;
    }
    if (isLoading) {
        return <BasicSpinner />;
    }

    return (
        <div>
            <h3>Actors</h3>
            <RenderTable
                columns={columns}
                data={actors.cast
                    .filter((actor) => actor.profile_path)
                    .filter((actor, length) =>
                        !loadedMore ? length < 3 : true
                    )}
            />
            <Button onClick={() => setLoadedMore((loadedMore) => !loadedMore)}>
                {loadedMore ? "Hide" : "Load More"}
            </Button>
        </div>
    );
}
