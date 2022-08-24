import useSearch from "../../hooks/useSearch";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import RenderMoviesTable from "./RenderMoviesTable";
import AdvancedPagination from "../AdvancedPagination";
import { Link, Route, Routes, useSearchParams } from "react-router-dom";

export default function Search({ search }) {
    let [searchParams, setSearchParams] = useSearchParams();
    let page = searchParams.get("page");
    const {
        isLoading,
        isPreviousData,
        isError,
        error,
        data: movies,
    } = useSearch(page, search);

    console.log(movies);

    const changePage = (page) => {
        if (isLoading || isError || isPreviousData) {
            return;
        }
        console.log(page);
        setSearchParams({ page });
    };
    if (isError) {
        return <WarningAlert errorMessage={error.message} />;
    }
    if (isLoading) {
        return <BasicSpinner />;
    }
    //return <p>Hi</p>;
    if (movies.results.length < 1) {
        return <h1>Sorry but no movies could be found with this name!</h1>;
    }
    return (
        <div>
            <div className="center-block">
                <AdvancedPagination
                    currentPage={movies.page}
                    maxPages={
                        movies.total_pages <= 500 ? movies.total_pages : 500
                    }
                    newPage={changePage}
                />
            </div>

            <RenderMoviesTable movies={movies} categoryId={0} />
        </div>
    );
}
