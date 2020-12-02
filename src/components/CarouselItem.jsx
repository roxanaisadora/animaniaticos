import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setFavorite} from '../actions'
import '../assets/styles/components/CarouselItem.scss';
import play from "../assets/static/play.png";
import add from "../assets/static/add.png";

const CarouselItem = (props) => {
    const {cover, title, year, contentRating, duration} = props;
    const handleSetFavorite = () => {
       props.setFavorite(
           { cover, title, year, contentRating, duration}
       )
    }   
    return(
        <div className="carousel-item">
                <img className="carousel-item__img" src={cover} alt={title}/>
                <div className="carousel-item__details">
                    <div>
                        <img src={add}  alt="add" onClick={handleSetFavorite} />
                        <img src={play} alt="play"/>
                    </div>
                    <p className="carousel-item__details--title">{title}</p>
                    <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
                </div>
            </div>
    )
}
CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}
const mapDispatchToProps = {
    setFavorite,
}
export default connect(null, mapDispatchToProps)(CarouselItem)