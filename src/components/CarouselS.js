import React, { useState, useEffect } from 'react';
import RecipeReviewCard from '../components/RecipeReviewCard';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import SecurityIcon from '@material-ui/icons/Security';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CallIcon from '@material-ui/icons/Call';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Favorites = (props) => {
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
            <div className="grid grid-cols-10">
                <div className="col-span-3 bg-blue-700 rounded-2xl hover:bg-gray-500 text-left">
                    <h1 className="hover:bg-red-800 font-bold font-bold cursor-pointer">Почему Eshop.uz</h1>
                    <br />
                    <h3 className="hover:bg-red-800 font-bold  cursor-pointer"><AirportShuttleIcon />Удобная оплата и быстрая доставка</h3>
                    <br />
                    <h3 className="hover:bg-red-800 font-bold  cursor-pointer"><SecurityIcon />Гарантия качества</h3>
                    <br />
                    <h3 className="hover:bg-red-800 font-bold  cursor-pointer"><CreditCardIcon /> Плати как удобно</h3>
                    <br />
                    <h3 className="hover:bg-red-800 font-bold  cursor-pointer"><CallIcon /> Поддержка 7 дней в неделю</h3>
                    <br />
                    <h3 className="hover:bg-red-800 font-bold  cursor-pointer"><RotateRightIcon /> Eco-friendly</h3>
                </div>
                <div className="col-span-7">
                    <Splide
                        className="mb-3"
                        options={{
                            type: "loop",
                            gap: "0.5rem",
                            autoplay: true,
                            pauseOnHover: false,
                            resetProgress: false,
                            arrows: "slider",
                            width: "100%",
                            // perMove: 10,
                            height: "20vh",
                            // perPage: 7,
                            lazyLoad: "nearby",
                            breakpoints: {
                                640: {
                                    perPage: 2
                                },
                                768: {
                                    perPage: 4
                                },
                                1024: {
                                    perPage: 5
                                },
                                1440: {
                                    perPage: 7
                                },
                                2560: {
                                    perPage: 8
                                }
                            }
                        }}
                        hasSliderWrapper
                    >
                        {filteredProducts !== []
                            ? filteredProducts.map((item, index) => (
                                <div className="mt-3 mr-2">
                                    <SplideSlide key={index}>
                                        <RecipeReviewCard
                                            key={index}
                                            data={item}
                                            getProducts={props.getProducts}
                                        />
                                    </SplideSlide>
                                </div>
                            ))
                            : null}
                    </Splide>
                </div>
            </div>
        </div>
    )
};

export default Favorites;