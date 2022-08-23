import Container from "react-bootstrap/Container";
import NavStatus from "../components/NavStatus";
import NowPlaying from "../components/subpages/NowPlaying";

export default function NowPlayingPage() {
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
            <NowPlaying />
        </Container>
    );
}
