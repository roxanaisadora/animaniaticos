import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => (
    <div class="carousel-item">
            <img class="carousel-item__img" src="https://ramenparados.com/wp-content/uploads/2019/07/one-piece-wano-845x600.jpg" alt="one_piece"/>
            <div class="carousel-item__details">
                <div>
                    <img src="../icons/añadir.png" alt="add"/>
                    <img src="../icons/compras.png" alt="play"/>
                </div>
                <p class="carousel-item__details--title">One Piece</p>
                <p class="carousel-item__details--subtitle">episodios +900 24 minutos</p>
            </div>
        </div>
)

export default CarouselItem