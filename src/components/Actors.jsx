import useMovie from "../hooks/useMovie";
import WarningAlert from "./WarningAlert";
import BasicSpinner from "./BasicSpinner";
import { useMemo, useState } from "react";
import RenderTable from "./renders/RenderTable";
import { Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import portraitImg from "../assets/portrait.png";

export default function Actors({ id, categoryId, type, search, page }) {
    const { credits: data } = useMovie(id);
    const { isLoading, isError, error, data: actors } = data;
    const [loadedMore, setLoadedMore] = useState(false);
    console.log(actors);
    //add end url, used for breadcrumb
    let endUrl = ``;
    if (type === "category") {
        endUrl = `&categoryId=${categoryId}`;
    } else if (type === "search") {
        endUrl = `&search=${search}`;
    }

    const columns = useMemo(
        () => [
            {
                Header: "Img",
                Cell: ({ row: { original: actor } }) => (
                    <Image
                        src={
                            actor.profile_path
                                ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                                : portraitImg
                        }
                        className="thumbnail rounded actor-img"
                        alt={`Image of the actor ${actor.name}`}
                    ></Image>
                ),
            },
            {
                Header: "Name",
                Cell: ({ row: { original: actor } }) => (
                    <NavLink
                        to={`/actor/${actor.id}?movieId=${id}&page=${
                            page ? page : 1
                        }&type=${type}${endUrl}`}
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
        <div className="actors">
            <h3 className="text-center">Actors</h3>
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
