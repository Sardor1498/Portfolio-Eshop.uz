import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import RecipeReviewCard from './RecipeReviewCard';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

/**
 * The function for the basic example.
 *
 * @return {FunctionComponent} - Function component.
 */
const CarouselAutoplay = (props) => {
    return (
        <div className="wrapper">
            <Splide
                // onArrowMounted={(splide, prev, next) => {
                //     console.log(prev, next);
                // }}
                className="mb-3"
                options={{
                    type: "loop",
                    gap: "0.5rem",
                    autoplay: true,
                    pauseOnHover: false,
                    resetProgress: false,
                    arrows: "slider",
                    width: "100%",
                    perMove: 1,
                    // height: "20vh",
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
                            perPage: 6
                        },
                        2560: {
                            perPage: 8
                        }
                    }
                }}
                hasSliderWrapper
            // hasAutoplayControls
            // hasAutoplayProgress
            >
                {props.products.map((item, index) => (
                    <SplideSlide key={index}>
                        <RecipeReviewCard
                            productsIsLoaded={props.productsIsLoaded} data={item}
                            products={props.products}
                            getProducts={props.getProducts}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default CarouselAutoplay;