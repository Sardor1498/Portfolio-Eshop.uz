import React, { useState, useEffect } from "react";
import RecipeReviewCard from "../components/RecipeReviewCard";

const Basket = props => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterBaskets = () => {
        var buttons = document.getElementsByClassName('');
            for (var i=0 ; i < buttons.length ; i++){
              (function(index){
                buttons[index].onclick = function(){
                  alert("I am button " + index);
                };
              })(i)
            }
    };
    useEffect(() => {
        filterBaskets();
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
export default Basket;