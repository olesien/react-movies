import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "./assets/scss/App.scss";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./pages/MoviePage";
import ActorPage from "./pages/ActorPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import MostPopularPage from "./pages/MostPopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import SearchPage from "./pages/SearchPage";
import React from "react";

//Initialize query client
const queryClient = new QueryClient();
function App() {
    return (
        <div id="App">
            <QueryClientProvider client={queryClient}>
                <Navigation />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/category/:categoryId"
                        element={<MoviesPage />}
                    />
                    <Route path="/search/:search" element={<SearchPage />} />
                    <Route path="/now-playing" element={<NowPlayingPage />} />
                    <Route path="/most-popular" element={<MostPopularPage />} />
                    <Route path="/top-rated" element={<TopRatedPage />} />
                    <Route path="/movie/:movieId" element={<MoviePage />} />
                    <Route path="/actor/:actorId" element={<ActorPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </QueryClientProvider>
        </div>
    );
}

export default App;
