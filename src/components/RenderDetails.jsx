import RenderMisc from "./RenderMisc";
import { Image } from "react-bootstrap";

export default function RenderDetails({ data, misc, leftslot, rightslot }) {
    return (
        <div className="movieContainer">
            <div className="left">
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${data.image_url}`}
                    className="thumbnail rounded "
                    alt={`Image of the movie ${data.title}`}
                />
                <RenderMisc data={misc} />
                {leftslot}
            </div>
            <div className="right">
                <h1>{data.title}</h1>
                <p>{data.overview}</p>
                {rightslot}
            </div>
        </div>
    );
}
