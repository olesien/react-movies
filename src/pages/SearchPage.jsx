import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavStatus from "../components/NavStatus";
import Search from "../components/subpages/Search";

export default function SearchPage() {
    //search
    const { search } = useParams();

    return (
        <Container className="py-3">
            <NavStatus
                progress={[
                    { name: "Home", active: false, url: "/" },
                    {
                        name: "Search",
                        active: true,
                        url: `/search/${search}/`,
                    },
                ]}
            />
            <h2>Showing results for: {search}</h2>
            <Search search={search} />
        </Container>
    );
}
