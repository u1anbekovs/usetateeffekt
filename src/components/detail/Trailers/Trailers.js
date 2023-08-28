import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../../ApiKey/APIKEY";
import Slider from "react-slick";


const Trailers = ({movieId}) => {

    const [trailers, setTrailers] = useState([])

    const getTrailers = async () => {
        const title = await axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${APIKEY}&language=en-US`)
        const {data} = await title
        await setTrailers(data.results)
    }

    console.log(trailers)

    useEffect(() => {
        getTrailers()
    }, [])

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 200,
        cssEase: "linear"
    };

    return (
        <div id="try" style={{
            background: "white",
            padding: '100px 0'
        }}>
            <div className="container">
                <div className="try">
                    <h1>Последние трейлеры</h1>
                    <Slider {...settings}>
                        {
                            trailers.map(el => (
                                <iframe src={`https://www.youtube.com/embed/${el.key}`}></iframe>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Trailers;