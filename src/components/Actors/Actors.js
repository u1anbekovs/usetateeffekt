import React, {useEffect, useState} from 'react';
import {APIKEY} from "../../ApiKey/APIKEY";
import axios from "axios";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

const Actors = ({movieId}) => {

    const [actors, setActors] = useState([])

    const getInfo = async () => {
        const artis = await axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKEY}&language=en-US`)
        const {data} = await artis
        setActors(data.cast)
    }

    console.log(actors)

    useEffect(() => {
        getInfo()
    }, [])


    const settings = {
        infinite: true,
        slidesToShow: 7,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 200,
    };

    return (
        <div id="actors" style={{
            background: 'white',
            padding: '50px 0'
        }}>
            <div className="container">
                <div className="actors">
                    <h1>В главных ролях</h1>

                    <Slider {...settings}>
                        {

                            actors.map(el => (
                                <NavLink to={`/movie/movie-results/${el.id}`}>
                                    <img style={{
                                        width: '150px',
                                        boxShadow: '1px 1px 1px 1px gray'
                                    }} src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                         alt=""/>
                                    <h4>{el.name}</h4>
                                    <p>{el.character}</p>
                                </NavLink>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Actors;