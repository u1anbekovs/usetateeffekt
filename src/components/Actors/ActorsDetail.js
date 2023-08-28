import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import Slider from "react-slick";


const ActorsDetail = () => {
    const [accordion, setAccordion] = useState(false)
    const [zeus, setZeus] = useState({})
    const [credits, setCredits] = useState([])
    const {actorsId} = useParams()

    const getInfo = async () => {
        const res = await axios(`https://api.themoviedb.org/3/person/${actorsId}?api_key=${APIKEY}&language=en-US`)
        const {data} = await res
        setZeus(data)
    }

    const getCredits = async () => {
        const res = await axios(`https://api.themoviedb.org/3/person/${actorsId}/movie_credits?api_key=${APIKEY}&language=en-US`)
        const {data} = await res
        setCredits(data.cast)
    }

    console.log(credits)

    useEffect(() => {
        getInfo()
        getCredits()
    }, [])

    console.log(zeus)

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 200,
        cssEase: "linear"
    };

    let {profile_path, birthday, biography, name} = zeus

    return (
        <section id="acDet" style={{
            background: "white",
            padding: '10% 0'
        }}>
            <div className="container">

                <div className="acDet" style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: '100px'
                }}>
                    <img style={{
                        padding: '0 100px',
                    }} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                    <div>
                        <h1>{name}</h1>
                        <p>{birthday}</p>

                        <p>{biography ? biography.length < 201 ? biography :
                            (<p style={{
                                display: accordion ? "none" : "block"
                            }}>{biography.slice(0, 200)}</p>) : ""}


                            <p style={{
                                display: accordion ? "block" : "none"
                            }}>{biography}</p>

                            <button onClick={() => setAccordion(!accordion)} style={{
                                display: accordion ? "none" : "block",
                                cursor: "pointer"
                            }}> Читать Дальше
                            </button>

                            <button onClick={() => setAccordion(!accordion)} style={{
                                display: accordion ? "block" : "none",
                                cursor: "pointer"
                            }}>Повернуть
                            </button>

                        </p>

                    </div>
                </div>

                <Slider {...settings}>
                    {
                        credits.map(el => (
                            <div>
                                <Link to={`/movie/${el.id}`}>
                                    <img width={130}
                                         src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`}
                                         alt=""/>
                                    <h5>{el.original_title}</h5>
                                    <b>({el.release_date})</b>
                                </Link>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    );
};

export default ActorsDetail;