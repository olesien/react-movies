import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import RenderMoviesTable from "../renders/RenderMoviesTable";
import AdvancedPagination from "../AdvancedPagination";
import { useSearchParams } from "react-router-dom";
import useMostPopular from "../../hooks/useMostPopular";
import SelectPopularPeriod from "../SelectPopularPeriod";

export default function MostPopular() {
    let [searchParams, setSearchParams] = useSearchParams();
    let page = searchParams.get("page");
    let popularPeriod = searchParams.get("popular-period");
    const {
        isLoading,
        isPreviousData,
        isError,
        error,
        data: movies,
    } = useMostPopular(page, popularPeriod);

    //Change the page if needed
    const changePage = (page) => {
        if (isLoading || isError || isPreviousData) {
            return;
        }
        console.log(page);
        setSearchParams({
            page,
            "popular-period": popularPeriod ? popularPeriod : "1",
        });
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
                {/* <Search /> */}
                <SelectPopularPeriod popularPeriod={popularPeriod} />
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
                type={"most-popular"}
                search={null}
                page={page}
            />
        </div>
    );
}
