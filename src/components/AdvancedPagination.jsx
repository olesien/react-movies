import Pagination from "react-bootstrap/Pagination";

function AdvancedPagination({ currentPage, maxPages, newPage }) {
    //Pagination used on most pages
    //The idea here is that no page that is below 1 or above the max pages should be shown. I had originally intended that when you first instance was on page 1, you could click 1,2,3,4,5
    //however I opted against this due to it being a bit more complicated and I focused on the other parts of the website.
    return (
        <Pagination>
            <Pagination.Prev
                disabled={currentPage - 1 <= 0}
                onClick={() => newPage(currentPage - 1)}
            />
            {currentPage === 1 ? (
                <></>
            ) : (
                <Pagination.Item
                    disabled={currentPage === 1}
                    onClick={() => newPage(1)}
                >
                    {1}
                </Pagination.Item>
            )}
            {currentPage === 1 ? <></> : <Pagination.Ellipsis disabled />}
            {currentPage - 2 <= 1 ? (
                <></>
            ) : (
                <Pagination.Item
                    disabled={currentPage - 2 <= 1}
                    onClick={() => newPage(currentPage - 2)}
                >
                    {currentPage - 2}
                </Pagination.Item>
            )}
            {currentPage - 1 <= 1 ? (
                <></>
            ) : (
                <Pagination.Item
                    disabled={currentPage - 1 <= 1}
                    onClick={() => newPage(currentPage - 1)}
                >
                    {currentPage - 1}
                </Pagination.Item>
            )}
            <Pagination.Item active>{currentPage}</Pagination.Item>
            {currentPage + 1 >= maxPages ? (
                <></>
            ) : (
                <Pagination.Item
                    disabled={currentPage + 1 >= maxPages}
                    onClick={() => newPage(currentPage + 1)}
                >
                    {currentPage + 1}
                </Pagination.Item>
            )}
            {currentPage + 2 >= maxPages ? (
                <></>
            ) : (
                <Pagination.Item
                    disabled={currentPage + 2 >= maxPages}
                    onClick={() => newPage(currentPage + 2)}
                >
                    {currentPage + 2}
                </Pagination.Item>
            )}

            {currentPage === maxPages ? (
                <></>
            ) : (
                <Pagination.Ellipsis disabled />
            )}
            {currentPage === maxPages ? (
                <></>
            ) : (
                <Pagination.Item
                    disabled={currentPage === maxPages}
                    onClick={() => newPage(maxPages)}
                >
                    {maxPages}
                </Pagination.Item>
            )}
            <Pagination.Next
                disabled={currentPage + 1 >= maxPages}
                onClick={() => newPage(currentPage + 1)}
            />
        </Pagination>
    );
}

export default AdvancedPagination;
