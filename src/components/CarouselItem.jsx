import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import play from "../assets/static/play.png";
import add from "../assets/static/add.png";

const CarouselItem = () => (
    <div class="carousel-item">
            <img class="carousel-item__img" src="https://ramenparados.com/wp-content/uploads/2019/07/one-piece-wano-845x600.jpg" alt="one_piece"/>
            <div class="carousel-item__details">
                <div>
                    <img src={add}  alt="add"/>
                    <img src={play} alt="play"/>
                </div>
                <p class="carousel-item__details--title">One Piece</p>
                <p class="carousel-item__details--subtitle">episodios +900 24 minutos</p>
            </div>
        </div>
)

export default CarouselItem