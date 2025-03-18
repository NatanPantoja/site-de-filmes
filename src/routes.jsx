import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Filme from './pages/Filme';

import Hearder from "./components/Header";

function RouteApp() {
    return (
        <BrowserRouter>
            <Hearder />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/id:" element={<Filme />} />

            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;