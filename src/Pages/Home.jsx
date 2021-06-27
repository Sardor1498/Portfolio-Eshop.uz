import React from 'react';
import SideBar from '../Layout/Sidebar/SideBar';
import CarouselAutoplay from '../components/CarouselAutoplay';
import Slideshow from '../Layout/SlideShow/SlideShow';
import SaleComponent from '../components/SaleComponent';
import CarouselS from '../components/CarouselS';

const Home = (props) => {
    // const darkMode = useSelector((state) => state.toggleReducer.toggle)
    return (
        <>
            <div>
                <Slideshow />
            </div>
            <div>
                <p className="text-lg font-sans font-extrabold mt-5">Популярные товары</p>
                <CarouselAutoplay
                    products={props.products}
                    productsIsLoaded={props.productsIsLoaded}
                    getProducts={props.getProducts}
                />
            </div>
            <div>
                <SideBar />
            </div>
            <div>
                <CarouselS
                    products={props.products}
                    productsIsLoaded={props.productsIsLoaded}
                    getProducts={props.getProducts}
                />
            </div>
        </>
    )
};
export default Home;