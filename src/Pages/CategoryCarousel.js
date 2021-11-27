import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import RecipeReviewCard from '../components/RecipeReviewCard';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

// const links = [
//     {
//         link: "phone",
//     },
//     {
//         link: "tv",
//     },
//     {
//         link: "notebooks",
//     },
//     {
//         link: "asdasd",
//     },
// ]

// const images = [
//     {
//         src: "https://www.ixbt.com/img/n1/news/2019/0/2/Notebook-9-Pro_main_1_large.jpg",
//     },
//     {
//         src: "https://www.ixbt.com/img/n1/news/2019/0/2/Notebook-9-Pro_main_1_large.jpg",
//     },
//     {
//         src: "https://www.ixbt.com/img/n1/news/2019/0/2/Notebook-9-Pro_main_1_large.jpg",
//     },
//     {
//         src: "https://www.ixbt.com/img/n1/news/2019/0/2/Notebook-9-Pro_main_1_large.jpg",
//     },
// ]

const CategoryCarousel = (props) => {
    // const newArray = props.categories.concat(links);
    return (
        <>
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
                                perPage: 5
                            },
                            2560: {
                                perPage: 6
                            }
                        }
                    }}
                    hasSliderWrapper
                // hasAutoplayControls
                // hasAutoplayProgress
                >
                    {props.categories.map((category, index) => (
                        <SplideSlide key={index}>
                            <RecipeReviewCard
                                data={category}
                                categories={props.categories}
                                className="h-9/12 w-full"
                                icons=" "
                                image={"https://www.ixbt.com/img/n1/news/2019/0/2/Notebook-9-Pro_main_1_large.jpg"}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    )
}

export default CategoryCarousel;