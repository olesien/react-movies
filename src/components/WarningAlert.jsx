import Alert from "react-bootstrap/Alert";

const WarningAlert = ({ errorMessage }) => {
    return (
        <Alert variant="warning">
            <h3 className="Warning">Warning! Error has occured</h3>
            {errorMessage}
        </Alert>
    );
};

export default WarningAlert;
