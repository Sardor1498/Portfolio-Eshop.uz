import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SaleComponent from './SaleComponent';
import { CircularProgress } from "@material-ui/core";
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import SecurityIcon from '@material-ui/icons/Security';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CallIcon from '@material-ui/icons/Call';
import RotateRightIcon from '@material-ui/icons/RotateRight';

/**
 * The function for the basic example.
 *
 * @return {FunctionComponent} - Function component.
 */
const CarouselS = (props) => {
    return (
        <>
            <div className="grid grid-cols-12 container bg-gray-200">
                <div className="card-banner bg-gradient-pink col-span-4 border-2 bg-blue-500 w-full h-full">
                    <h1 className="hover:shadow-3xl font-bold cursor-pointer">Почему Eshop.uz</h1>
                    <br/>
                    <h3 className="hover:shadow-3xl  cursor-pointer"><AirportShuttleIcon />Удобная оплата и быстрая доставка</h3>
                    <br/>
                    <h3 className="hover:shadow-3xl  cursor-pointer"><SecurityIcon />Гарантия качества</h3>
                    <br/>
                    <h3 className="hover:shadow-3xl  cursor-pointer"><CreditCardIcon /> Плати как удобно</h3>
                    <br/>
                    <h3 className="hover:shadow-3xl  cursor-pointer"><CallIcon /> Поддержка 7 дней в неделю</h3>
                    <br/>
                    <h3 className="hover:shadow-3xl  cursor-pointer"><RotateRightIcon /> Eco-friendly</h3>

                </div>
                <div className="grid grid-cols-8 flex">
                    <div className="place-items-center ">
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
                                // height: "20vh",   ////
                                // perPage: 7,
                                lazyLoad: "nearby",
                                breakpoints: {
                                    640: {
                                        perPage: 1
                                    },
                                    768: {
                                        perPage: 2
                                    },
                                    1024: {
                                        perPage: 3
                                    },
                                    1440: {
                                        perPage: 4
                                    },
                                    2560: {
                                        perPage: 5
                                    }
                                }
                            }}
                            hasSliderWrapper
                        // hasAutoplayControls
                        // hasAutoplayProgress
                        >
                            <div className="">
                                {props.products.map((item, index) => (
                                    <SplideSlide key={index}>
                                        <SaleComponent
                                            productsIsLoaded={props.productsIsLoaded} data={item}
                                            products={props.products}
                                            getProducts={props.getProducts}
                                        />
                                    </SplideSlide>
                                ))}
                            </div>
                        </Splide>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarouselS;