import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import RenderMoviesTable from "../renders/RenderMoviesTable";
import AdvancedPagination from "../AdvancedPagination";
import { useSearchParams } from "react-router-dom";
import useTopRated from "../../hooks/useTopRated";

export default function TopRated() {
    let [searchParams, setSearchParams] = useSearchParams();
    let page = searchParams.get("page");
    //load top rated
    const {
        isLoading,
        isPreviousData,
        isError,
        error,
        data: movies,
    } = useTopRated(page);

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

    return (
        <div>
            <div className="center-block">
                {/* <Search /> */}
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
                type={"top-rated"}
                search={null}
                page={page}
            />
        </div>
    );
}
