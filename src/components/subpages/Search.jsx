import useSearch from "../../hooks/useSearch";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import RenderMoviesTable from "../renders/RenderMoviesTable";
import AdvancedPagination from "../AdvancedPagination";
import { useSearchParams } from "react-router-dom";

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

            <RenderMoviesTable
                movies={movies}
                categoryId={0}
                type={"search"}
                search={search}
                page={page}
            />
        </div>
    );
}
