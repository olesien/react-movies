import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "./assets/scss/App.scss";
const queryClient = new QueryClient();
function App() {
    return (
        <div id="App">
            <QueryClientProvider client={queryClient}>
                <Navigation />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </QueryClientProvider>
        </div>
    );
}

export default App;