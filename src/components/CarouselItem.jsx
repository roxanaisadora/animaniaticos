import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setFavorite, deleteFavorite} from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import play from "../assets/static/play.png";
import add from "../assets/static/add.png";
import deleteicon from "../assets/static/delete_icon.png";

const CarouselItem = (props) => {
    const {id, cover, title, year, contentRating, duration} = props;
    const handleSetFavorite = () => {
       props.setFavorite(
           { id, cover, title, year, contentRating, duration}
       )
    } 
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
     }    
    return(
        <div className="carousel-item">
                <img className="carousel-item__img" src={cover} alt={title}/>
                <div className="carousel-item__details">
                    <div>
                        <img src={add}  alt="add" onClick={handleSetFavorite} />
                        <img src={play} alt="play"/>
                        <img src={deleteicon}  alt="delete-icon" onClick={() => handleDeleteFavorite(id)} />
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
    deleteFavorite,
}
export default connect(null, mapDispatchToProps)(CarouselItem)