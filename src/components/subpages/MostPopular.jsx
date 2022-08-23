import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import RenderMoviesTable from "./RenderMoviesTable";
import AdvancedPagination from "../AdvancedPagination";
import { Link, Route, Routes, useSearchParams } from "react-router-dom";
import useMostPopular from "../../hooks/useMostPopular";

export default function MostPopular() {
    let [searchParams, setSearchParams] = useSearchParams();
    let page = searchParams.get("page");
    const {
        isLoading,
        isPreviousData,
        isError,
        error,
        data: movies,
    } = useMostPopular(page);

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