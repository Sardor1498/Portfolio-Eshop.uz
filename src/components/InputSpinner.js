import React, { useState, useEffect } from "react";
import { change } from "redux-form";

const InputSpinner = (props) => {
    return (
        <div className="flex">
            <div className="flex border bg-white rounded mt-5">
                <button
                    onClick={() => props.count < 20 ? props.setCount(props.count + 1) : props.setCount(20)}
                    className="w-10 h-10 bg-gray-200 border">
                    +
                </button>
                <input
                    type="text"
                    value={props.count}
                    className="p-2 w-10 h-10 border-gray-500"
                    disabled
                />
                <button
                    onClick={() => props.count > 1 ? props.setCount(props.count - 1) : props.setCount(1)}
                    className="w-10 h-10 bg-gray-200  border">
                    -
                </button>
            </div>
        </div>
    )
}

export default InputSpinner;