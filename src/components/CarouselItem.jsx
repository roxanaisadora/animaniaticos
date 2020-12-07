import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {setFavorite, deleteFavorite} from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import play from "../assets/static/play.png";
import add from "../assets/static/add.png";
import deleteicon from "../assets/static/delete_icon.png";

const CarouselItem = (props) => {
    const {id, cover, title, year, contentRating, duration, isList} = props;
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
                        {isList? 
                            <img src={deleteicon}  alt="delete-icon" onClick={() => handleDeleteFavorite(id)} />
                            :<img src={add}  alt="add" onClick={handleSetFavorite} />
                        }
                        <Link to={`/player/${id}`} >
                            <img 
                                src={play} 
                                alt="play"
                            />
                        </Link>
                        
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