import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../ApiKey/APIKEY";
import {Link} from "react-router-dom";

const Popular = () => {

    const [popular, setPopular] = useState([])

    const getPopular = async () => {
        const pop = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await pop
        setPopular(data.results)
    }

    console.log(popular)
    useEffect(() => {
        getPopular()
    }, [])

    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        popular.map(el => (
                            <div key={el.id}>
                                <div className="popular--group">
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

export default Popular;