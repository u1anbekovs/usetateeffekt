import './App.scss';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Popular from "./components/Popular";
import Playing from "./components/Playing";
import TopRated from "./components/Toprated";
import Details from "./components/detail/Details";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActorsDetail from "./components/Actors/ActorsDetail";
import Footer from "./components/Footer";
import Search from "./components/Search/Search";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Popular/>}/>
                <Route path={'/TopRated'} element={<TopRated/>}/>
                <Route path={'/Playing'} element={<Playing/>}/>
                <Route path={'/movie/:movieId'} element={<Details/>}/>
                <Route path={'/movie/movie-results/:actorsId'} element={<ActorsDetail/>}/>
                <Route path={'/movie/movie-search/:searchId'} element={<Search/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
