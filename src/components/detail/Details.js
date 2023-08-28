import React from 'react';
import {useEffect, useState,} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import Actors from "../Actors/Actors";
import Trailers from "./Trailers/Trailers";

const Details = () => {

    const [click, setClick] = useState({})
    const {movieId} = useParams()

    const getDetails = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        await setClick(data)
    }

    console.log(click)


    useEffect(() => {
        getDetails()
    }, [])

    return (
        <section id="details">
            <div style={{
                background: `linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.9)),url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${click.backdrop_path})no-repeat center center  fixed`,
            }}>
                <div className="container">
                    <div className="details">
                        {
                            <div className="details__item">

                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${click.poster_path}`}
                                     alt=""/>

                                <div className="details__item--text">
                                    <h1>{click.title}<b>({click.release_date})</b></h1>
                                    <div className="details__item--text__btn">
                                        <button
                                            className='details__item--text__btn--vote'>{Math.floor(click.vote_average * 10)}%
                                        </button>
                                    </div>
                                    <p><b>OVERVIEW : </b>{click.overview}</p>
                                </div>

                            </div>
                        }
                    </div>
                </div>
            </div>
            <Actors movieId={movieId}/>
            <Trailers movieId={movieId}/>
        </section>
    )
}

export default Details