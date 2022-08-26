import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSearchParams, NavLink, useNavigate } from "react-router-dom";

export default function SearchBar() {
    let [searchParams] = useSearchParams();
    const initial = searchParams.get("search");
    const [search, setSearch] = useState(initial ? initial : "");
    let navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        if (search.length < 1) return;
        navigate(`search/${search}`);
    };
    // console.log(search);
    return (
        <Form className="d-flex ps-2" onSubmit={submit}>
            <Form.Control
                type="search"
                placeholder="Search"
                value={search}
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
                variant="dark"
            />
            <Button
                variant="outline-primary"
                as={NavLink}
                disabled={search.length < 1}
                to={`search/${search}`}
            >
                Search
            </Button>
        </Form>
    );
}
