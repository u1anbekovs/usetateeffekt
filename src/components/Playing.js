import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../ApiKey/APIKEY";
import {Link} from "react-router-dom";

const Playing = () => {

    const [playing, setPlaying] = useState([])

    const getPlaying = async () => {
        const play = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await play
        setPlaying(data.results)
    }

    console.log(playing)
    useEffect(() => {
        getPlaying()
    }, [])

    return (
        <div id="playing">
            <div className="container">
                <div className="playing">
                    {
                        playing.map(el => (
                            <div key={el.id}>
                                <div className="playing--group">
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

export default Playing;