import { Container } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import NavStatus from "../components/NavStatus";
import Actor from "../components/subpages/Actor";

export default function ActorPage() {
    const { actorId } = useParams();
    let [searchParams] = useSearchParams();
    let page = searchParams.get("page");
    let categoryId = searchParams.get("categoryId");
    let search = searchParams.get("search");
    let type = searchParams.get("type");
    let movieId = searchParams.get("movieId");
    let linkUrl = `?page=${page ? page : 1}&type=${type}`;
    if (type === "category") {
        linkUrl += `&categoryId=${categoryId}`;
    } else if (type === "search") {
        linkUrl += `&search=${search}`;
    }
    const base_url = `${type}${
        type === "category"
            ? "/" + categoryId
            : type === "search"
            ? "/" + search
            : ""
    }`;
    const historyArray = [{ name: "Home", active: false, url: "/" }];
    if (type !== "history") {
        historyArray.push({
            name: type,
            active: false,
            url: `/${base_url}?page=${page ? page : 1}`,
        });
    }
    historyArray.push({
        name: "Movie",
        active: false,
        url: `/movie/${movieId}${linkUrl}`,
    });
    historyArray.push({
        name: "Actor",
        active: true,
        url: `/actor/${actorId}${linkUrl}?movieId=${movieId}`,
    });
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
