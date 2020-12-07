import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Header from '../components/Header'
import '../assets/styles/App.scss'

const Home = ({mylist, trends, originals, searchResult  }) => {
    return (
        <> 
            <Header/>
            <Search/>
            {searchResult.length > 0 &&
            <Categories title="Resultados de la busqueda...">
                <Carousel>
                    {searchResult.map(item =>
                        <CarouselItem 
                        key={item.id} 
                        {...item}
                        />)
                    }
                </Carousel>
            </Categories>                        
            }
            {mylist.length >0 && 
            <Categories title = "Mi lista">
                <Carousel>
                    {mylist.map (item => 
                        <CarouselItem 
                        key= {item.id} 
                        {...item} 
                        isList
                        />
                    )}
                </Carousel>
            </Categories>
            }

            <Categories title = "Tendencias">
                <Carousel>
                    {trends.map (item => 
                        <CarouselItem key= {item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title = "Acción">
                <Carousel>
                    {originals.map (item => 
                        <CarouselItem key= {item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
        </>
    )
    
    
}

const mapStateToProps = (state) => {
    return {
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
        searchResult: state.searchResult,
    }
}

export default connect(mapStateToProps, null)(Home)