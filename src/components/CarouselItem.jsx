import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import play from "../assets/static/play.png";
import add from "../assets/static/add.png";

const CarouselItem = ({cover, title,year, contentRating, duration}) => (
    <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}/>
            <div className="carousel-item__details">
                <div>
                    <img src={add}  alt="add"/>
                    <img src={play} alt="play"/>
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>
)

export default CarouselItem