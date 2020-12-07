import React from 'react';
import { searchVideo} from '../actions';
import { connect } from 'react-redux';
import '../assets/styles/components/Search.scss'

const Search = (props) => {
    const {searchVideo} = props;

    const handleInput = (event) => {
        searchVideo(event.target.value);       
    }

    return(
        <section className="main">
            <h2 className="main__title">Categorias</h2>
            <input 
                className="search__input" 
                type="text" 
                placeholder="Buscar..." 
                onKeyUp={handleInput}
            />
        </section>
    )
}
const mapStateToProps = state => {
    return {
        searchResult: state.searchResult,
    }
}

const mapDispatchToProps = {
    searchVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)