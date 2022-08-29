import React from "react";
import { NavLink } from "react-router-dom";
import BasicSpinner from "../BasicSpinner";
import { ListGroup } from "react-bootstrap";
import WarningAlert from "../WarningAlert";
import useGenres from "../../hooks/useGenres";

export default function Genres() {
    const { isLoading, isError, error, data } = useGenres();
    const genres = data?.genres;

    //Return if it's error or loading
    if (isError) {
        return <WarningAlert errorMessage={error.message} />;
    }
    if (isLoading) {
        return <BasicSpinner />;
    }
    return (
        <ListGroup>
            {genres.map((genre) => (
                <ListGroup.Item
                    key={genre.id}
                    as={NavLink}
                    end
                    to={"/category/" + genre.id}
                >
                    {genre.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
