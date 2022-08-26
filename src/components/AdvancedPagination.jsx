import Pagination from "react-bootstrap/Pagination";

function AdvancedPagination({ currentPage, maxPages, newPage }) {
    return (
        <Pagination>
            <Pagination.First
                disabled={currentPage === 1}
                onClick={() => newPage(1)}
            />
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
            {/* <Pagination.Ellipsis disabled /> */}
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
            <Pagination.Last
                disabled={currentPage === maxPages}
                onClick={() => newPage(maxPages)}
            />
        </Pagination>
    );
}

export default AdvancedPagination;
