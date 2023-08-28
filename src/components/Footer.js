import React from 'react';
import bb from "../img/b.svg"


const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="footer">
                    <div>
                        <img src={bb} alt=""/> <br/>
                        <a href="https://www.themoviedb.org/signup?language=ru"><button>ВСТУПИТЬ В СООБЩЕСТВО</button></a>

                    </div>
                    <div className="footer--menu">

                        <div>
                            <h3>ГЛАВНОЕ</h3>
                            <a href="https://www.themoviedb.org/?language=ru">О TMDB</a> <br/>
                            <a href="https://www.themoviedb.org/about/staying-in-touch?language=ru">Связаться с нами</a> <br/>
                            <a href="https://www.themoviedb.org/talk?language=ru">Форумы поддержки</a> <br/>
                            <a href="https://developers.themoviedb.org/3/getting-started/introduction">API</a> <br/>
                            <a href="https://status.themoviedb.org/">Статус системы</a>
                        </div>
                        <div>
                            <h3>УЧАСТВУЙТЕ</h3>
                            <a href="https://www.themoviedb.org/bible?language=ru">Библия редакторов</a> <br/>
                            <a href="https://www.themoviedb.org/movie/new?language=ru">Добавить новый фильм</a> <br/>
                            <a href="https://www.themoviedb.org/tv/new?language=ru">Добавить новый сериал</a>
                        </div>
                        <div>
                            <h3>СООБЩЕСТВО</h3>
                            <a href="https://www.themoviedb.org/documentation/community/guidelines?language=ru">Руководства</a> <br/>
                            <a href="https://www.themoviedb.org/discuss?language=ru">Обсуждения</a> <br/>
                            <a href="https://www.themoviedb.org/leaderboard?language=ru">Доска почёта</a> <br/>
                            <a href="https://twitter.com/themoviedb">Twitter</a>
                        </div>
                        <div>
                            <h3>О ПРАВЕ</h3>
                            <a href="https://www.themoviedb.org/terms-of-use">Условия использования</a> <br/>
                            <a href="https://www.themoviedb.org/documentation/api/terms-of-use?language=ru">API Правила использования</a> <br/>
                            <a href="https://www.themoviedb.org/privacy-policy?language=ru">Политика конфиденциальности</a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footer;