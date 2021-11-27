import React, { useState, useEffect } from 'react';
import RecipeReviewCard from './RecipeReviewCard';


const SaleComponent = (props) => {

    const [product, setProduct] = useState({});

    // const getProduct = () => {
    //     let elem;
    //     let arr = [];
    //     for (let i = 0; i <= 7;  i++) {
    //         elem = props.products[i];
    //         arr.push(elem);
    //     }
    //     setProduct(arr)
    // }


    useEffect(() => {
        setProduct(props.products);
    }, [props.products])

    return (
        <div>
            <div className="grid grid-cols-11">
                <div className="col-span-3">

                </div>
                <div className="col-span-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-2">
                        {
                            product ? (
                                <div className="text-red-500">
                                    <RecipeReviewCard
                                        productsIsLoaded={props.productsIsLoaded}
                                        data={product}
                                    />
                                </div>) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleComponent;