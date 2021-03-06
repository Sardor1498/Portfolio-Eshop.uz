import React, { useEffect, useState, useCallback } from "react";
import './styles.css'
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

const BuyPage = (props) => {
    const [value, setValue] = React.useState("3");
    const [totalM, setTotalM] = useState();
    const [totalAll, setTotalAll] = useState();
    const dispatch = useDispatch();
    const handleClick = event => {
        setValue(event.target.value)
    }


    // const setToRedux = useCallback(
    //     () => dispatch({type: "ADD_PRICE_SUCCESS", payload: 12}),
    //     [dispatch]
    //   )

    useEffect(() => {
        calc();
    })

    const calc = () => {
        let foiz;
        let foiz2;

        switch (value) {
            case "3":
                foiz2 = 12 / value;
                foiz = 24 / foiz2;
                break;
            case "6":
                foiz2 = 12 / value;
                foiz = 30 / foiz2;
                break;
            case "9":
                foiz2 = 12 / value;
                foiz = 40 / foiz2;
                break;
            case "12":
                foiz2 = 12 / value;
                foiz = 50 / foiz2;
                break;
        }
        let asosiyOylikTolov = props.price / value; //   asosiy qarz
        let qushilganOylikFoiz = props.price / 100 * foiz / value; // 45
        let totalOylik = asosiyOylikTolov + qushilganOylikFoiz
        let jamiSumma = totalOylik * value;
        setTotalM(totalOylik);
        // dispatch({type: "ADD_PRICE_SUCCESS", payload: totalOylik});
        setTotalAll(jamiSumma);
        dispatch({type: "ADD_PRICE_SUCCESS", payload: totalM}) // BuyPagedan globalni statega chiqarish uchun useDispatch qilindi
        // setToRedux()
    }

    return (
        <>
            <div className="container mx-auto my-5 bg-gray-200">
                <div className="grid place-items-center grid-cols-1">
                    <div>{props.price}</div>
                    <div className="text-2xl font-bold">
                        ???????????? ?????????? ?? ??????????????????
                    </div>
                    <p className="text-gray-400">
                        ?????????????? ???????????????????????????? ?????????? ?? ???????? ??????????????????, ????????
                        ?????????????????? ??????????????????
                    </p>
                    <p className="text-lg">
                        ???????????????????????????? ?????????? (?????????? ?????????????????? ???? ??????????????)
                    </p>
                    <input
                        type="text"
                        className="w-full focus:border-red-600 focus:border-4 rounded p-3 border-gray-500"
                    />
                    <p className="text-gray-500 ">
                        ?????????????????????? ??????????: {props.price * 0.15} ??????
                    </p>
                    <h5>???????? ??????????????????, ??????????.</h5>
                    <div className="radio-group bg-gray-100 rounded-full">
                        <input
                            onClick={handleClick}
                            type="radio"
                            id="month3"
                            value="3"
                            name="group1"
                            className="opacity-0 hidden"
                            defaultChecked
                        />
                        <label
                            id="label3"
                            htmlFor="month3"
                            className="py-1 px-3 w-24 m-0 h-8 font-bold rounded-full"
                        >
                            3 oy
                        </label>
                        <input
                            onClick={handleClick}
                            type="radio"
                            id="month6"
                            value="6"
                            name="group1"
                            className="opacity-0"
                        />
                        <label
                            htmlFor="month6"
                            id="label6"
                            className="py-1 px-3 w-24 m-0 h-8 font-bold rounded-full"
                        >
                            6 oy
                        </label>
                        <input
                            onClick={handleClick}
                            type="radio"
                            id="month9"
                            value="9"
                            name="group1"
                            className="opacity-0"
                        />
                        <label
                            id="label9"
                            htmlFor="month9"
                            className="py-1 px-3 w-24 m-0 h-8 font-bold rounded-full"
                        >
                            9 oy
                        </label>
                        <input
                            onClick={handleClick}
                            type="radio"
                            id="month12"
                            value="12"
                            name="group1"
                            className="opacity-0"
                        />
                        <label
                            id="label12"
                            htmlFor="month12"
                            className="py-1 px-3 w-24 m-0 h-8 font-bold rounded-full"
                        >
                            12 oy
                        </label>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="border-2 border-gray-400 bg-transparent">
                            <p>
                                ?????????????????????????? ????????????:<span>{ totalM ? totalM.toFixed(2) + " ??????" : null}</span>
                            </p>
                        </div>
                        <div className="border-2 border-gray-400 bg-transparent">
                            <p>
                                ?????????? ??????????<span>{ totalAll ? totalAll.toFixed(2) + " ??????" : null}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuyPage;