import Container from "react-bootstrap/Container";
import NavStatus from "../components/NavStatus";
import MostPopular from "../components/subpages/MostPopular";

export default function MostPopularPage() {
    return (
        <Container className="py-3">
            <NavStatus
                progress={[
                    { name: "Home", active: false, url: "/" },
                    {
                        name: "Now Playing",
                        active: true,
                        url: `/now-playing`,
                    },
                ]}
            />
            <MostPopular />
        </Container>
    );
}
