import { useSearchParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function SelectPopularPeriod({ popularPeriod }) {
    let [searchParams, setSearchParams] = useSearchParams();

    const changePeriod = (e) => {
        setSearchParams({ page: 1, "popular-period": e.target.value });
    };

    return (
        <Form.Select
            aria-label="Select period for popular movies"
            size="sm"
            className="popular-period"
            value={popularPeriod ? popularPeriod : "1"}
            onChange={changePeriod}
        >
            <option value="1">Today</option>
            <option value="2">This Week</option>
        </Form.Select>
    );
}
