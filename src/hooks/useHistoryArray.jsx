export default function useHistoryArray(
    id,
    page,
    categoryId,
    search,
    type,
    movieId = false
) {
    //Get the history array needed for the breadcrumb
    let linkUrl = `?page=${page ? page : 1}&type=${type}`;
    if (type === "category") {
        linkUrl += `&categoryId=${categoryId}`;
    } else if (type === "search") {
        linkUrl += `&search=${search}`;
    }
    //set base url
    const base_url = `${type}${
        type === "category"
            ? "/" + categoryId
            : type === "search"
            ? "/" + search
            : ""
    }`;
    //What should be pushed to the breadcrumb?
    const historyArray = [{ name: "Home", active: false, url: "/" }];
    if (type !== "history") {
        historyArray.push({
            name: type,
            active: false,
            url: `/${base_url}?page=${page ? page : 1}`,
        });
    }
    historyArray.push({
        name: "Movie",
        active: !movieId, //if this is the default movieId = false, this will be active
        url: `/movie/${movieId ? movieId : id}${linkUrl}`,
    });
    if (movieId) {
        historyArray.push({
            name: "Actor",
            active: true,
            url: `/actor/${id}${linkUrl}?movieId=${movieId}`,
        });
    }

    return { historyArray };
}
