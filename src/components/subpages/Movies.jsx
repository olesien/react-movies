import useMovieList from "../../hooks/useMovieList";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import RenderMoviesTable from "../renders/RenderMoviesTable";
import AdvancedPagination from "../AdvancedPagination";
import { useSearchParams } from "react-router-dom";

export default function Movies({ id }) {
    let [searchParams, setSearchParams] = useSearchParams();
    let page = searchParams.get("page");
    const {
        isLoading,
        isPreviousData,
        isError,
        error,
        data: movies,
    } = useMovieList(id, page);

    console.log(movies);

    //Change the page if needed
    const changePage = (page) => {
        if (isLoading || isError || isPreviousData) {
            return;
        }
        console.log(page);
        setSearchParams({ page });
    };

    //Return if it's error or loading
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
            <RenderMoviesTable
                movies={movies}
                categoryId={id}
                type={"category"}
                search={null}
                page={movies.page}
            />
        </div>
    );
}
