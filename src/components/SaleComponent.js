import React, { useState, useEffect } from 'react';
import RecipeReviewCard from './RecipeReviewCard';
import Button from "@material-ui/core/Button";
import { Link, useParams } from "react-router-dom";


const SaleComponent = (props) => {
    
    const [product, setProduct] = useState();

    const getProduct = () => {
        let elem;
        let arr = [];
        for (let i = 0; i <= 7; i++) {
            elem = props.products[i];
            arr.push(elem);
        }
        setProduct(arr);

    }

    useEffect(() => {
        if (props.products.length !== 0) {
            getProduct();
        }
    }, [props.products])

    return (
        <div>
            <span className="text-xl font-bold text-left">Товары на распродаже</span>
            <div className="grid grid-cols-11">
                <div className="col-span-3 bg-red-600 rounded pl-2">
                    
                    <div className="sticky top-16">
                        <div className="text-xl text-white font-bold">Рассрочка</div>
                        <div className="text-lg text-white font-semibold">Без оформления кредита</div>
                        <img
                            src="https://olcha.uz/uploads/advertising/images/extra/F5LdMy45DNa3b8OvN4yTXRqkptLUyX90yU4x1Rpn.png"
                            alt="Rasm"
                        // className="sticky top-0"
                        />
                        <div className="flex justify-center">
                            <Link to="/favorites">
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="secondary"
                                >
                                    Посмотреть все
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-2">
                        {
                            product && product !== [] ? (
                                product.map((item, index) => (
                                    <div key={index} className="text-red-500">
                                        <RecipeReviewCard
                                            productsIsLoaded={props.productsIsLoaded}
                                            data={item}
                                        />
                                    </div>
                                ))

                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleComponent;