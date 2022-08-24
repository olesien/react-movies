import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSearchParams, NavLink } from "react-router-dom";

export default function SearchBar() {
    let [searchParams, setSearchParams] = useSearchParams();
    const initial = searchParams.get("search");
    const [search, setSearch] = useState(initial ? initial : "");
    // console.log(search);
    return (
        <Form className="d-flex ps-2">
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
