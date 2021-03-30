import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import RecipeReviewCard from './RecipeReviewCard';
import { CircularProgress } from "@material-ui/core";

/**
 * The function for the basic example.
 *
 * @return {FunctionComponent} - Function component.
 */
const CarouselAutoplay = (props) => {
    return (
        <div className="wrapper">
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
                            perPage: 7
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
                        <RecipeReviewCard productsIsLoaded={props.productsIsLoaded} data={item} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default CarouselAutoplay;