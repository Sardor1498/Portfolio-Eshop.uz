import React, { useState, useEffect } from 'react';
import RecipeReviewCard from '../components/RecipeReviewCard';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import SecurityIcon from '@material-ui/icons/Security';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CallIcon from '@material-ui/icons/Call';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import { Splide, SplideSlide } from "@splidejs/react-splide";

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

const CarouselS = (props) => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterFavorites = () => {
        var arr = [];
        if (props.products.length > 0) {
            props.products.map(product =>
                product.selected ? (arr.push(product), setFilteredProducts(arr)) : null
            );
        }
    };
    useEffect(() => {
        filterFavorites();
    }, [props.products])

    return (
        <div>
            <span className="font-bold text-2xl">Часто бывает нужно</span>
            <div className="grid grid-cols-11">
                <div className="col-span-3 h-96 mt-14 bg-red-600 rounded hover:bg-red-500 text-left p-12">
                    <h1 className="hover:text-white text-yellow font-bold cursor-pointer">Почему Eshop.uz</h1>
                    <h3 className="hover:text-white text-yellow font-bold cursor-pointer"><AirportShuttleIcon />
                        Удобная оплата и быстрая доставка
                    </h3>
                    <h3 className="hover:text-white text-yellow font-bold cursor-pointer"><SecurityIcon />Гарантия качества</h3>
                    <h3 className="hover:text-white text-yellow font-bold cursor-pointer"><CreditCardIcon /> Плати как удобно</h3>
                    <h3 className="hover:text-white text-yellow font-bold cursor-pointer"><CallIcon /> Поддержка 7 дней в неделю</h3>
                    <h3 className="hover:text-white text-yellow font-bold cursor-pointer"><RotateRightIcon /> Eco-friendly</h3>
                </div>

                <div className="col-span-8">
                    <Splide
                        options={{
                            type: "loop",
                            gap: "0.5rem",
                            perMove: 1,
                            pagination: false,
                            autoplay: true,
                            pauseOnHover: false,
                            resetProgress: false,
                            arrows: "slider",
                            width: "100%",
                            // height: "60vh",
                            lazyLoad: "nearby",
                            breakpoints: {

                                640: {
                                    perPage: 3.5
                                },
                                1440: {
                                    perPage: 4
                                },
                                2560: {
                                    perPage: 4
                                }
                            }
                        }}
                        hasSliderWrapper
                    >
                        {filteredProducts !== []
                            ? filteredProducts.map((item, index) => (
                                <SplideSlide key={index}>
                                    <RecipeReviewCard
                                        getProducts={props.getProducts}
                                        productsIsLoaded={props.productsIsLoaded} data={item}
                                    />
                                </SplideSlide>
                            ))
                            : null}
                    </Splide>
                </div>
            </div>
        </div>
    )
};

export default CarouselS;