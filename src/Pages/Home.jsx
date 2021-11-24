import React from 'react';
import SideBar from '../Layout/Sidebar/SideBar';
import CarouselAutoplay from '../components/CarouselAutoplay';
import Slideshow from '../Layout/SlideShow/SlideShow';
import SaleComponent from '../components/SaleComponent';
import CarouselS from '../components/CarouselS';
import CategoryCarousel from './CategoryCarousel';
import SearchProducts from '../components/SearchProducts'

const Home = (props) => {
    return (
        <>
            <div className={props.searchProducts.length > 0 ? "grid grid-cols-4 gap-5" : null}>
                {
                    props.searchProducts !== [] && props.searchProducts.length > 0 ? props.searchProducts.map((item) => (
                        <SearchProducts
                            key={item.id}
                            data={item}
                        />
                    )) : (
                        <div>
                            <Slideshow />
                        </div>
                    )
                }
            </div>
            <div>
                {
                    props.searchProducts.length > 0 ? <Slideshow /> : null
                }
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
                <CarouselS
                    products={props.products}
                    productsIsLoaded={props.productsIsLoaded}
                    getProducts={props.getProducts}
                />
            </div>
            <div>
                <SaleComponent
                    products={props.products}
                    productsIsLoaded={props.productsIsLoaded}
                    getProducts={props.getProducts}
                />
            </div>
            <div>
                <span className="text-lg font-sans font-extrabold">Категория</span>
                <CategoryCarousel
                    products={props.products}
                    categories={props.categories}
                    productsIsLoaded={props.productsIsLoaded}
                    getProducts={props.getProducts}
                />
            </div>
        </>
    )
};
export default Home;