import React from 'react';
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import '../assets/styles/App.scss'


const App = () => (

    <div className = "App"> 
        <Header/>
        <Search/>

        <Categories title = "Recomendado">
            <Carousel>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
            </Carousel>
        </Categories>

        <Categories title = "Mi lista">
            <Carousel>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
            </Carousel>
        </Categories>

        <Categories title = "Acción">
            <Carousel>
               <CarouselItem/>
               <CarouselItem/>
               <CarouselItem/>
            </Carousel>
        </Categories>
        

        <Footer/>
    </div>
)

export default App