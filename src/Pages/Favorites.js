import React, { useState, useEffect } from "react";
import RecipeReviewCard from "../components/RecipeReviewCard";

const Favorites = props => {
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
    }, [props.products]);
    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                {filteredProducts !== []
                    ? filteredProducts.map((item, index) => (
                          <RecipeReviewCard
                              key={index}
                              data={item}
                              getProducts={props.getProducts}
                          />
                      ))
                    : null}
            </div>
        </>
    );
};
export default Favorites;