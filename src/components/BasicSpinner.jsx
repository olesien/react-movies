import CircleLoader from "react-spinners/CircleLoader";

export default function BasicSpinner() {
    return (
        <div className="d-flex justify-content-center py-5">
            <CircleLoader size={50} color="#0d47ba" />
        </div>
    );
}
