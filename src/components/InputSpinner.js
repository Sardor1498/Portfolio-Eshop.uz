import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const InputSpinner = (props) => {
    // const [count, setCount] = useState(1);

    // const change = (e) => {
    //     if (e.target.value < 0 || e.target.value === NaN) {
    //         setCount(0)
    //     }else {
    //         setCount(parseInt(e.target.value))
    //     }
    // }

    return (
        <div className="flex justify-center">
            <div className="flex border bg-white rounded mt-5">
                <button
                    onClick={() => props.count < 20 ? props.setCount(props.count + 1) : props.setCount(20)}
                    className="w-12 h-10 bg-gray-200 border">
                        +
                </button>
                <input
                    type="text"
                    value={props.count}
                    className="w-12 p-3 h-10 border-gray-500"
                    disabled
                />
                <button
                    onClick={() => props.count > 1 ? props.setCount(props.count - 1) : props.setCount(1)}
                    className="w-12 h-10 bg-gray-200 border">
                        -
                </button>
            </div>
        </div>
    )
}
export default InputSpinner;