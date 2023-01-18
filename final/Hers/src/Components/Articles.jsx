import React from "react";
import "./Articles.css";
import articleData from "./article-data";

function Articles({ onNav }) {
    const list = articleData.map((article) => {
        return (
            <li className="list" key={article.id}>
                <div className="cardarticle">
                    <h2 className="cardtitle">{article.title}</h2>
                    <img className="article__pic" src={article.pic} alt={article.alt} />
                    <p className="text">{article.text}</p>
                    <a className="link"
                        href={`#${article.title.replaceAll(' ', '-')}`}
                        onClick={onNav}
                        data-page={article.id}
                        aria-label={article.title}
                    >
                        Design Gallery </a>
                </div>
            </li>
        );
    });
    return (
        <div className="articles">
            <div className="card-hero">
                <div className="image-hero">
                    <img className="pic-hero" src={require("../Images/Cardhero.jpg")} alt="test" />
                    <div className="card-content">
                        <div className="card-body">

                        </div>
                    </div>

                </div>
            </div>

            <ul className="article__list">
                {list}
            </ul>

        </div>

    );

}

export default Articles;