import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import RenderMoviesTable from "./RenderMoviesTable";
import AdvancedPagination from "../AdvancedPagination";
import { Link, Route, Routes, useSearchParams } from "react-router-dom";
import useNowPlaying from "../../hooks/useNowPlaying";

export default function NowPlaying() {
    let [searchParams, setSearchParams] = useSearchParams();
    let page = searchParams.get("page");
    const {
        isLoading,
        isPreviousData,
        isError,
        error,
        data: movies,
    } = useNowPlaying(page);

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
