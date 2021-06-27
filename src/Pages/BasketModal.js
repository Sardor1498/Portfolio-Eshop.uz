import React, { useState } from "react";
import InputSpinner from "../components/InputSpinner";

const BasketModal = (props) => {
    const [count, setCount] = useState(1);


    return (
        <>
            <div className="">
                <div className="card grid grid-cols-12 p-3 border rounded-lg border-gray-200">
                    <div className="col-span-1 border">
                        <img src={props.product.photo} alt={props.product.title} />
                    </div>
                    <div className="col-span-4">
                        <div className="text-left text-md text-gray-300 pl-2 font-semibold">
                            {props.product.title + " " + props.product.brandName}
                        </div>
                        <div className="text-left text-md pl-2 font-bold">
                            {props.product.description}
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="input-spinner">
                            <InputSpinner
                                setCount={setCount}
                                count={count}
                                product={props.product.price}
                            />
                        </div>
                    </div>
                    <div className="col-span-3 pt-6">
                        <span className="text-gray-600 text-2xl font-semibold">
                            {(props.product.price * count) + " сўм"}
                        </span>
                    </div>
                    <div className="col-span-1 px-2 py-1">
                        <div className="mt-3 w-14 text-gray-300 border cursor-pointer rounded-lg pb-2 text-4xl">
                            &times;
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasketModal;