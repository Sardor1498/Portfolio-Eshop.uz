import React, { useState, useEffect } from 'react';
import RecipeReviewCard from '../components/RecipeReviewCard';

const Favorites = props => {
    const [filteredProducts, setFilteredProducts] = useState();

    const filterFavorites = () => {
        var arr = [];
        if (props.product.length > 0) {
            props.products.map(product =>
                product.selected ? (arr.push(product), setFilteredProducts(product)) : null
            );
        }
    }
    useEffect(() => {
        filterFavorites();
    }, [props.products])
    return (
        <>
            <div className="grid grid-cols-6 gap-4">
                {filteredProducts !== []
                    ? filteredProducts.map((item, index) => (
                        <div className="mt-3 mr-2" key={index}>
                            <RecipeReviewCard
                                key={index}
                                data={item}
                                getProducts={props.getProducts}
                            />
                        </div>
                    ))
                    : null}
            </div>
        </>
    );
}
export default Favorites;