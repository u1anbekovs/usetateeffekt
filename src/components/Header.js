import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../img/b.svg"
import {useState} from "react";
import {ImSearch} from "react-icons/im"
import {GrClose} from "react-icons/gr"
import {BiMenu} from "react-icons/bi"
import {CgClose} from "react-icons/cg"


const Header = () => {

    const [input, setInput] = useState(false)
    const [menu, setMenu] = useState(false)
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const handleClick = (name) => {
        navigate(`movie/movie-search/:${name}`)
    }

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={logo} alt=""/>

                    <div className="nav" style={{
                        display: input ? "none" : "block"
                    }}>


                        <NavLink to={'/'}>Popular</NavLink>
                        <NavLink to={'/TopRated'}>Rated</NavLink>
                        <NavLink to={'/Playing'}>Playing</NavLink>

                    </div>

                    <input type="text" placeholder="Найти фильм, сериал..."
                           onChange={event => setValue(event.target.value)} onKeyDown={(event) => {
                        if (event.key === 'Enter') handleClick(value)
                    }}



                           style={{
                        display: input ? "block" : "none"
                    }}/>

                    <h2 onClick={() => setInput(!input)} style={{
                        display: input ? "none" : "block",
                        color: "white"
                    }}><ImSearch/></h2>

                    <h2 onClick={() => setInput(!input)} style={{
                        display: input ? "block" : "none",
                    }}><GrClose/></h2>

                </div>
            </div>

            <h1 className="menu"><BiMenu onClick={() => setMenu(!menu)} style={{
                display: menu ? "none" : "block",
                color: "white"
            }}/>
            </h1>

            <h1 className="menuA"><CgClose onClick={() => setMenu(!menu)} style={{
                display: menu ? "block" : "none"
            }}/>
            </h1>

            <div className="menu-group" style={{
                display: menu ? "block" : "none"
            }}>

                <div className="menu-header">
                    <h2>Добро пожаловать.</h2>

                    <h2>Присоединяйтесь сегодня
                        Get access to maintain your own custom personal lists, track what you've seen and search and
                        filter for what to watch next—regardless if it's in theatres, on TV or available on popular
                        streaming services like .</h2>

                </div>
            </div>
        </div>
    );
};

export default Header;