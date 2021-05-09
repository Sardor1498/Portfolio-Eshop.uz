import React from 'react';
import SideBar from '../Layout/Sidebar/SideBar';
import CarouselAutoplay from '../components/CarouselAutoplay';
import Slideshow from '../Layout/SlideShow/SlideShow';

const Home = (props) => {
    return (
        <>
            {/* <div>
                <Content />
            </div> */}
            <div>
                <Slideshow />
            </div>
            <div>
                <p className="text-lg font-sans font-extrabold mt-5">Популярные товары</p>
                <CarouselAutoplay products={props.products}
                    productsIsLoaded={props.productsIsLoaded}
                    getProducts={props.getProducts}
                />
            </div>
            <div>
                <SideBar />
            </div>
        </>
    )
};
export default Home;