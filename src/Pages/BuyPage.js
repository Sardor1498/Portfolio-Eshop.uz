import React, { useEffect , useState } from "react";
import { Link, useParams } from "react-router-dom";
import './styles.css'

const BuyPage = (props) => {
    // const { price } = useParams();
    const [value, setValue] = useState("3");
    const [totalM, setTotalM] = useState();
    const [totalAll, setTotalAll] = useState();


    const handleClick = event => {
        setValue(event.target.value);
    };

    useEffect(() => {
        calc();
    })

    const calc = () => {
        let foiz;
        let foiz2;

        switch(value) {
            case "3":
            foiz2 = 12 / value;
            foiz = 24 / foiz2;        
            case "6":
            foiz2 = 12 / value;
            foiz = 30 / foiz2;
            case "9": 
            foiz2 = 12 / value;
            foiz = 40 / foiz2;
            case "12":
            foiz2 = 12 / value;
            foiz = 50 / foiz2;
            break;
            default:
                foiz2 = 12 / value;
                foiz = 24 / foiz2;
        }

        let asosiyOyliktolov = props.price / value;  //asosiy qarz
        let qushilganOylikfoiz = props.price / 100 * foiz / value // 45
        let totalOylik = asosiyOyliktolov + qushilganOylikfoiz;
        let jamiSumma = totalOylik * value;
        setTotalM(totalOylik);
        setTotalAll(jamiSumma);
    }
    
    return (
        <>
            <div className="container mx-auto bg-gray-200">
                <div className="grid place-items-center grid-cols-1">
                    <div className="text-2xl font-bold">
                        Купить товар в рассрочку
                    </div>
                    <p className="text-gray-400">
                        Введите первоночальный взнос и срок рассрочки, чтоб
                        расчитать рассрочку
                    </p>
                    <p className="text-lg">
                        Первоначальный взнос (можно увеличить по желанию)
                    </p>
                    <input
                        type="text"
                        className="w-full focus:border-red-600 focus:border-4 rounded p-3 border-gray-500"
                    />
                    <p className="text-gray-400 ">
                        Минимальная сумма: 431 000 сум
                    </p>
                    <h5>Срок рассрочки, месяц.</h5>

                    <div className="radio-group bg-gray-100 rounded-full">
                            <input
                                type="radio"
                                id="month3"
                                value="3"
                                name="group1"
                                className="opacity-0 hidden"
                                onClick={handleClick}
                                defaultChecked
                            />
                            <label
                                id="label3"
                                htmlFor="month3"
                                className="py-1 px-3 w-20 font-bold m-0 h-8 rounded-full"
                            >
                                3 oy
                            </label>
                            <input
                                type="radio"
                                id="month6"
                                value="6"
                                name="group1"
                                className="opacity-0"
                                onClick={handleClick}
                            />
                            <label
                                htmlFor="month6"
                                id="label6"
                                className="py-1 px-3 w-20 font-bold m-0 h-8 rounded-full"
                            >
                                6 oy
                            </label>
                            <input
                                type="radio"
                                id="month9"
                                value="9"
                                name="group1"
                                className="opacity-0"
                                onClick={handleClick}
                            />
                            <label
                                id="label9"
                                htmlFor="month9"
                                className="py-1 px-3 w-20 font-bold m-0 h-8 rounded-full"
                            >
                                9 oy
                            </label>
                            <input
                                type="radio"
                                id="month12"
                                value="12"
                                name="group1"
                                className="opacity-0"
                                onClick={handleClick}
                            />
                            <label
                                id="label12"
                                htmlFor="month12"
                                className="py-1 px-3 w-20 font-bold m-0 h-8 rounded-full"
                            >
                                12 oy
                            </label>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="border-2 border-gray-400 bg-transparent">
                            <p>
                                Ежемесесячный платеж:<span> { totalM ? totalM + "сум" : null }</span>
                            </p>
                        </div>
                        <div className="border-2 border-gray-400 bg-transparent">
                            <p>
                                Общая сумма<span> {totalAll ? totalAll + "сум" : null } </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BuyPage;