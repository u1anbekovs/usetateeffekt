import React from 'react';
import {Link} from "react-router-dom";

const All = ({el}) => {

    return (
        <div id="all">
            <div className="container">
                <div className="popular--group">
                    <Link to={`/movie/${el.id}`}>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                             alt=""/>
                        <h5>{el.original_title}</h5>
                        <b>({el.release_date})</b>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default All;