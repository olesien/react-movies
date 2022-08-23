import Container from "react-bootstrap/Container";
import NavStatus from "../components/NavStatus";
import TopRated from "../components/subpages/TopRated";

export default function TopRatedPage() {
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
            <TopRated />
        </Container>
    );
}
