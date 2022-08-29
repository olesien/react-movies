import { Container } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import NavStatus from "../components/NavStatus";
import Actor from "../components/subpages/Actor";
import useHistoryArray from "../hooks/useHistoryArray";

export default function ActorPage() {
    const { actorId } = useParams();
    let [searchParams] = useSearchParams();
    //get search params
    let page = searchParams.get("page");
    let categoryId = searchParams.get("categoryId");
    let search = searchParams.get("search");
    let type = searchParams.get("type");
    let movieId = searchParams.get("movieId");
    let { historyArray } = useHistoryArray(
        actorId,
        page,
        categoryId,
        search,
        type,
        movieId
    );
    return (
        <Container className="py-3">
            <NavStatus progress={historyArray} />
            <Actor
                id={actorId}
                categoryId={categoryId}
                type={type}
                search={search}
                page={page}
            />
        </Container>
    );
}
