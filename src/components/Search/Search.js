import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import All from "../All/All";

const Search = () => {

    const [result, setResult] = useState([])
    const {searchId} = useParams()

    const getMovieName = async () => {
        const name = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchId}`)
        const {data} = await name
        await setResult(data.results)
    }

    useEffect(() => {
        getMovieName()
    })

    return (

        <section id="popular">
            <div className="container">
                <div className="popular">
                    {
                        result.map(el => <All el={el}/>)
                    }
                </div>
            </div>
        </section>

    );
};

export default Search;