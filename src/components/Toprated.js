import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../ApiKey/APIKEY";
import {Link} from "react-router-dom";

const TopRated = () => {

    const [rated, setRated] = useState([])

    const getRated = async () => {
        const rat = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await rat
        setRated(data.results)
    }

    console.log(rated)
    useEffect(() => {
        getRated()
    }, [])

    return (
        <div id="topRated">
            <div className="container">
                <div className="topRated">
                    {
                        rated.map(el => (
                            <div key={el.id}>
                                <div className="topRated--group">
                                    <Link to={`/movie/${el.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                                             alt=""/>
                                        <h5>{el.original_title}</h5>
                                        <b>({el.release_date})</b>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;