import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import EqualizerIcon from '@material-ui/icons/Equalizer';



const Compare = (props) => {
    const { id } = useParams();
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState()
    const getProduct = async () => {
        let res = await props.getCurrentProduct(id);
        setProduct(res);
    }

    useEffect(() => {
        if (id) {
            getProduct();
        }

    }, []);


    return (
        <div className="my-6">
            <div className="flex justify-start bg-gray-100 py-4 text-gray-900">
                <Link className=" ml-8 text-gray-900" to="/">
                    Главная /
                </Link>
                <Link className="text-gray-900" to="/compare">
                    Список сравнения
                </Link>
            </div>
            <div className="flex justify-start font-bold mt-3 text-3xl font-sans pl-4">
                Список сравнения
            </div>

            {
                !product ? (
                    <div className="grid grid-cols-1 my-4">
                        <div className="text-gray-300">
                            <EqualizerIcon style={{ fontSize: "200px" }} />
                            <div className="text-2xl text-gray-600 font-semibold">Список сравнения пуст.</div>
                            <div>Начните выбирать товары из широкого ассортимента нашего каталога.</div>
                            <br />

                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-4">
                        <div className="col-span-3">
                            <div className="card flex grid grid-cols-12 p-3 border">
                                <div className="col-span-1 border">
                                    <img src="https://olcha.uz/image/80x80/products/oGBDPiozoAZLLKGKXKhOrStwwDoQkH6JBJ0FHj0l8G1CiKmGMyPZRny8v8Es.jpeg" alt="" />
                                </div>
                                <div className="col-span-4">
                                    <div className="text-md text-gray-300 font-semibold">Список сравнения пуст.</div>
                                    <div className="text-md font-semibold hover:text-red-500 cursor-pointer">
                                        Добавьте товар в список сравнения, чтобы выбрать наиболее подходящий.
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            <br />
            <div className="grid grid-cols-4 text-left pl-4">
                <div>
                    <div className="text-3xl text-red-500 font-bold font-serif">Eshop.uz</div>
                    <div className="font-serif">Eshop store LLC 2017 © 2021. Все права защищены</div>
                </div>
                <div>
                    <div className="font-serif">Политика конфиденциальности</div>
                    <div className="font-serif">Помощь</div>
                    <div className="font-serif">Условия рассрочки</div>
                    <div className="font-serif">О компании</div>
                </div>
                <div>
                    <div className="font-serif">Оферта</div>
                    <div className="font-serif">Eco-friendly</div>
                    <div className="font-serif">Оплата и доставка</div>
                </div>
                <div className="grid justify-items-center">
                    <div className="w-2/3 flex justify-center">
                        <div className="bg-gray-100 border p-3 rounded-lg">
                            <div className="text-lg font-serif">Телефон поддержки</div>
                            <div className="font-bold text-lg font-serif">+998 (71) 202-202-1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Compare;