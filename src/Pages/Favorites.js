import React, { useState, useEffect } from 'react';
import RecipeReviewCard from '../components/RecipeReviewCard';

const Favorites = (props) => {
    const [filteredProducts, setFiltiredProducts] = useState();

    const filterFavorites = () => {
        if (props.product.length > 0) {
            props.products.map(product => (
                product.selected ? setFiltiredProducts(product) : null
            ))
        }
    }
    useEffect(() => {
        filterFavorites()
    }, [props.products])
    return (
        <>
            <RecipeReviewCard
                data={filteredProducts}
                getProducts={props.getProducts}
            />
        </>
    );
}
export default Favorites;