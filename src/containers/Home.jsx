import React, {useState, useEffect} from 'react';
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitiaState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'
const Home = () => {
    const initiaState = useInitiaState(API);
    return initiaState.length === 0 ? <h1>Loading...</h1> : (
        <> 
            <Search/>
            {initiaState.mylist.length >0 && 
            <Categories title = "Mi lista">
                <Carousel>
                    {initiaState.mylist.map (item => 
                        <CarouselItem key= {item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
            }

            <Categories title = "Tendencias">
                <Carousel>
                    {initiaState.trends.map (item => 
                        <CarouselItem key= {item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title = "Acción">
                <Carousel>
                    {initiaState.originals.map (item => 
                        <CarouselItem key= {item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
        </>
    )
}

export default Home