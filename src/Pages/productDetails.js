
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import InfoIcon from "@material-ui/icons/Info";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import Modal from '../components/Modal'
import BuyPage from "./BuyPage";

const ProductDetails = props => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [details, setDetails] = useState({});

    const getProduct = async () => {
        let resp = await props.getCurrentProduct(id);
        setProduct(resp);
    };
    const getDetail = async () => {
        let res = await props.getProductDetails(id);
        setDetails(res);
    };

    useEffect(() => {
        getProduct();
        getDetail();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-6">
                <div className="col-span-2 grid grid-cols-6">
                    <div className="col-span-1">
                        <img
                            className="w-full h-20 border-2"
                            src="https://olcha.uz/image/600x600/products/nuLlUceSeSMND0d0ahV8WweIdA4N3qNVQBgxbGDWrZ9Cv1TDWF68KgzZq5ln.jpeg"
                            alt=""
                        />
                    </div>
                    <div className="col-span-5">
                        <img
                            className="w-full h-96 border-2"
                            src="https://olcha.uz/image/600x600/products/nuLlUceSeSMND0d0ahV8WweIdA4N3qNVQBgxbGDWrZ9Cv1TDWF68KgzZq5ln.jpeg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="flex-none">
                        <h1 className="text-1xl text-red-600">Samsung</h1>
                        <h1 className="text-4xl">Samsung Galaxy A32 4/64GB </h1>
                        <h1 className="text-4xl">Awesome Black </h1>
                        <div className="flex pl-5 pt-5">
                            <p>
                                <CheckIcon className="text-green-500" />{" "}
                                Доставка по Узбекистану
                            </p>
                        </div>
                        <div className="text-1xl text-yellow-500 ">
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <p className="text-gray-300">
                                ____________________________________________________________________
                            </p>
                        </div>
                        <div>
                            <h1 className="text-4xl ">Коротко о товаре</h1>
                            <h1 className="text-1xl">
                                Гарантийный срок (месяц): 12{" "}
                            </h1>
                            <h1 className="text-1xl">Версия ОС: Android 11 </h1>
                            <h1 className="text-1xl">
                                Объем встроенной памяти: 64GB
                            </h1>
                            <h1 className="text-1xl">Датчик Face ID: Есть</h1>
                            <h1 className="text-1xl">
                                Производитель смартфона: Вьетнам
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-2xl">Цвет</h1>
                            <div className="flex pl-3 mt-3">
                                <div className="pl-2">
                                    <Button
                                        variant="contained"
                                        color="secondary"

                                    >
                                        Купить
                                    </Button>
                                </div>
                                <div className="pl-2">
                                    <Modal
                                        openBtn="добавит продукт"
                                        modalHeaderTitle="добавит продукт"
                                        component={
                                            <BuyPage price={product.price} />
                                        }
                                    />
                                </div>
                                <div className="pl-2">
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                    >
                                        Купить в один клик
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <button className="text-1xl bg-white text-block-800 border border-gray-400">
                                    Awesome Violet
                                </button>
                                <button className="bg-white hover:bg-gray-100 text-block-800 font-semibold border border-gray-400">
                                    Awesome White
                                </button>
                                <button className="bg-white hover:bg-gray-100 text-block-800 font-semibold border border-red-400">
                                    Awesome Black
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid-cols-1">
                <div>
                    <h1 className="text-3xl">3 478 000 cym </h1>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl">Характеристики и описание</h1>
                    <h1 className="text-4xl">Память и процессор смартфона</h1>
                </div>
                <div className="flex">
                    <h1>Объем оперативной памяти </h1>
                    <p className="text-gray-300 ">___________________</p>
                    <h1 className="">4 GB </h1>
                </div>
                <div className="flex">
                    <h1>Объем встроенной памяти</h1>
                    <p className="text-gray-300">_____________________</p>
                    <h1 className="">64GB </h1>
                </div>
                <div className="flex">
                    <h1>Процессор </h1>
                    <p className="text-gray-300">
                        ______________________________________
                    </p>
                    <h1 className="">MediaTek Helio G80</h1>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl">Связь</h1>
                </div>
                <div className="flex">
                    <h1>Спутниковая навигация</h1>
                    <p className="text-gray-300">
                        ________________________
                    </p>
                    <h1 className="ml-5">{details.navigation}</h1>
                </div>
                <div className="flex mx-20 my-10">
                    <h1>Стандарт</h1>
                    <p className="text-gray-300">
                        ________________________________________
                    </p>
                    <h1 className="">GSM, 3G, 4G LTE</h1>
                </div>
                <div className="flex">
                    <h1>Wi-Fi </h1>
                    <p className="text-gray-300">
                        ____________________________________________
                    </p>
                    <h1 className="">Wi-Fi 802.11</h1>
                </div>
                <div className="flex">
                    <h1>Bluetooth</h1>
                    <p className="text-gray-300">
                        _______________________________________
                    </p>

XAKM AKA, [15.05.21 17:17]
<h1 className="">Bluetooth 5,0</h1>
                </div>
                <div className="flex">
                    <h1>NFC</h1>
                    <p className="text-gray-300">
                        _____________________________________________
                    </p>
                    <h1 className="">Yes (market/region dependent)</h1>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl">Дисплей смартфона</h1>
                </div>
                <div className="flex">
                    <h1>Диагональ</h1>
                    <p className="text-gray-300">
                        ______________________________
                    </p>
                    <h1 className="">6.4"</h1>
                </div>
                <div className="flex">
                    <h1>Тип дисплея</h1>
                    <p className="text-gray-300">___________________</p>
                    <h1 className="">Super AMOLED</h1>
                </div>
                <div className="flex">
                    <h1>Разрешениe экрана</h1>
                    <p className="text-gray-300">
                        ___________________________________
                    </p>
                    <h1 className="">2400x1080</h1>
                </div>
                <div className="flex">
                    <h1>Соотношение сторон</h1>
                    <p className="text-gray-300">_____________________</p>
                    <h1 className="">20:9</h1>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl">Камера смартфона</h1>
                </div>
                <div className="flex">
                    <h1>Фронтальная камера</h1>
                    <p className="text-gray-300">
                        _______________________________________
                    </p>
                    <h1 className="">20MP</h1>
                </div>
                <div className="flex">
                    <h1>Основная камера</h1>
                    <p className="text-gray-300">
                        _______________________________________
                    </p>
                    <h1 className="">64MP + 8MP + 5MP + 5MP</h1>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl">Питание</h1>
                </div>
                <div className="flex mx-20">
                    <h1>Тип аккумулятора</h1>
                    <p className="text-gray-300">
                        ______________________________
                    </p>
                    <h1 className="">Li-lon</h1>
                </div>
                <div className="flex">
                    <h1>Емкость аккумулятора</h1>
                    <p className="text-gray-300">___________________</p>
                    <h1 className="">5000 мАч</h1>
                </div>

XAKM AKA, [15.05.21 17:17]
<div className="text-left">
                    <h1 className="text-3xl">Отзывы</h1>
                </div>
                <div className="text-2xl flex">
                    <StarOutlinedIcon className="text-yellow-500" />
                    <StarOutlinedIcon className="text-yellow-500" />
                    <StarOutlinedIcon className="text-yellow-500" />
                    <StarOutlinedIcon className="text-yellow-500" />
                    <StarOutlinedIcon className="text-yellow-500" />
                </div>
                <div className="flex">
                    <h1 className=" text-2xl">5</h1>
                    <p className="text-gray-500 text-2xl">|1 отзывов</p>
                </div>
                <div className="flex w-96  h-20 border-2 bg-">
                    <h1 className="">user998933557112</h1>
                    <div className="flex-none">
                        <div className="text-2xl">
                            <StarOutlinedIcon className="text-yellow-500" />
                            <StarOutlinedIcon className="text-yellow-500" />
                            <StarOutlinedIcon className="text-yellow-500" />
                            <StarOutlinedIcon className="text-yellow-500" />
                            <StarOutlinedIcon className="text-yellow-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;