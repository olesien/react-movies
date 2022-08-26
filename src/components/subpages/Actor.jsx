import React from "react";
import useActor from "../../hooks/useActor";
import ActorMovies from "../ActorMovies";
import RenderDetails from "../renders/RenderDetails";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";

export default function Actor({ id, categoryId, search, page, type }) {
    const { actor: data } = useActor(id);
    const { isLoading, isError, error, data: actor } = data;
    console.log(actor);

    if (isError) {
        return <WarningAlert errorMessage={error.message} />;
    }
    if (isLoading) {
        return <BasicSpinner />;
    }

    return (
        <RenderDetails
            data={{
                title: actor.name,
                image_url: actor.profile_path,
                overview: actor.biography,
            }}
            misc={[
                {
                    name: "Birthplace",
                    info: actor.place_of_birth,
                },
                {
                    name: "Populairty",
                    info: actor.popularity,
                },
                {
                    name: "Department",
                    info: actor.department,
                },
                {
                    name: "Gender",
                    info: actor.gender === 1 ? "Female" : "Male",
                },
            ]}
            leftslot={<></>}
            rightslot={
                <ActorMovies
                    id={id}
                    categoryId={categoryId}
                    type={type}
                    search={search}
                    page={page}
                />
            }
        />
    );
}
