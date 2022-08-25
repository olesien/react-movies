import RenderMisc from "./RenderMisc";
import { Image } from "react-bootstrap";

export default function RenderDetails({ data, misc, leftslot, rightslot }) {
    return (
        <div className="movieContainer">
            <div className="left">
                <h1>{data.title}</h1>
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${data.image_url}`}
                    className="thumbnail rounded "
                    alt={`Image of the movie ${data.title}`}
                />

                <p>{data.overview}</p>

                {leftslot}
            </div>
            <div className="right">
                <RenderMisc data={misc} />
                {rightslot}
            </div>
        </div>
    );
}
