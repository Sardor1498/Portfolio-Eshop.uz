
import React from "react";
import { useParams } from "react-router-dom";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";

const ProductDetails = (props) => {

    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <div>
                        <img
                            className="w-20 h-20 my-10 ml-20   border-2"
                            src="https://olcha.uz/image/600x600/products/nuLlUceSeSMND0d0ahV8WweIdA4N3qNVQBgxbGDWrZ9Cv1TDWF68KgzZq5ln.jpeg"
                            alt=""
                        />
                        <img
                            className="w-96 h-96 my-10 border-2"
                            src="https://olcha.uz/image/600x600/products/nuLlUceSeSMND0d0ahV8WweIdA4N3qNVQBgxbGDWrZ9Cv1TDWF68KgzZq5ln.jpeg"
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <div className="flex-none">
                        <h1 className="text-1xl text-red-600  my-1 mr-96">
                            Samsung
                        </h1>
                        <h1 className="text-4xl ml-10 my-1 ">
                            Samsung Galaxy A32 4/64GB{" "}
                        </h1>
                        <h1 className="text-4xl -ml-40 my-1">Awesome Black </h1>
                        <div className="text-1xl  -ml-96">
                            <StarOutlinedIcon className="text-yellow-500 ml-60" />
                            <StarOutlinedIcon className="text-yellow-500" />
                            <StarOutlinedIcon className="text-yellow-500" />
                            <StarOutlinedIcon className="text-yellow-500" />
                            <StarOutlinedIcon className="text-yellow-500" />
                            <p className="text-gray-300 ml-96">
                                ________________________________________________________________________
                            </p>
                        </div>
                        <div>
                            <h1 className="text-4xl -ml-20 my-1 ">
                                Коротко о товаре
                            </h1>
                            <h1 className="text-1xl -ml-20 my-1">
                                Гарантийный срок (месяц): 12{" "}
                            </h1>
                            <h1 className="text-1xl -ml-20 my-1">
                                Версия ОС: Android 11{" "}
                            </h1>
                            <h1 className="text-1xl -ml-20 my-1">
                                Объем встроенной памяти: 64GB
                            </h1>
                            <h1 className="text-1xl -ml-20 my-1">
                                Датчик Face ID: Есть
                            </h1>
                            <h1 className="text-1xl -ml-20 my-1">
                                Производитель смартфона: Вьетнам
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-2xl -ml-40 my-1 ">Цвет</h1>
                            <div>
                                <button className=" text-1xl -ml-20 bg-white text-block-800 py-1 px-1 border border-gray-400">
                                    Awesome Violet
                                </button>
                                <button className=" bg-white hover:bg-gray-100 text-block-800 font-semibold py-1 px-1 border border-gray-400">
                                    Awesome White
                                </button>
                                <button className=" bg-white hover:bg-gray-100 text-block-800 font-semibold py-1 px-1 border border-red-400">
                                    Awesome Black
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid-cols-1">
                <div>
                    <h1 className="text-3xl -mt-8 mr-96">3 478 000 cym </h1>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl my-4 ml-24 ">
                        Характеристики и описание
                    </h1>
                    <h1 className="text-4xl my-4 ml-24">
                        Память и процессор смартфона
                    </h1>
                </div>
                <div className="flex mx-20 my-4 ml-28 ">
                    <h1>Объем оперативной памяти </h1>
                    <p className="text-gray-300 ">_______________________</p>
                    <h1 className="ml-5">4 GB </h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>Объем встроенной памяти</h1>
                    <p className="text-gray-300">_________________________</p>
                    <h1 className="ml-5">64GB </h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>Процессор </h1>
                    <p className="text-gray-300 ml-5">
                        __________________________________________
                    </p>
                    <h1 className="ml-5">MediaTek Helio G80</h1>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl my-4 ml-24 ">Связь</h1>
                </div>
                <div className="flex mx-20 my-4 ml-28">
                    <h1>Спутниковая навигация</h1>
                    <p className="text-gray-300 ml-5">
                        ____________________________
                    </p>
                    <h1 className="ml-5">A-GPS, GLONASS, BDS, GALILEO</h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>Стандарт</h1>
                    <p className="text-gray-300 ml-5">
                        ____________________________________________
                    </p>
                    <h1 className="ml-5">GSM, 3G, 4G LTE</h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>Wi-Fi </h1>
                    <p className="text-gray-300 ml-5">
                        ________________________________________________
                    </p>
                    <h1 className="ml-5">Wi-Fi 802.11</h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>Bluetooth</h1>
                    <p className="text-gray-300 ml-5">
                        ___________________________________________
                    </p>
                    <h1 className="ml-5">Bluetooth 5,0</h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>NFC</h1>
                    <p className="text-gray-300 ml-5">
                        _________________________________________________
                    </p>
                    <h1 className="ml-5">Yes (market/region dependent)</h1>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl my-4 ml-24 ">Дисплей смартфона</h1>
                </div>
                <div className="flex mx-20 my-4 ml-28 ">
                    <h1>Диагональ</h1>
                    <p className="text-gray-300 ml-5">
                        __________________________________
                    </p>
                    <h1 className="ml-5">6.4"</h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>Тип дисплея</h1>
                    <p className="text-gray-300 ml-5">
                        _______________________
                    </p>
                    <h1 className="ml-5">Super AMOLED</h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>Разрешениe экрана</h1>
                    <p className="text-gray-300 ml-5">_______________________________________
                    </p>
                    <h1 className="ml-5">2400x1080</h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>Соотношение сторон</h1>
                    <p className="text-gray-300 ml-5">
                        _________________________
                    </p>
                    <h1 className="ml-5">20:9</h1>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl my-4 ml-24 ">Камера смартфона</h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>Фронтальная камера</h1>
                    <p className="text-gray-300 ml-5">
                        ___________________________________________
                    </p>
                    <h1 className="ml-5">20MP</h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>Основная камера</h1>
                    <p className="text-gray-300 ml-5">
                        ___________________________________________
                    </p>
                    <h1 className="ml-5">64MP + 8MP + 5MP + 5MP</h1>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl my-4 ml-24 ">Питание</h1>
                </div>
                <div className="flex mx-20 my-4 ml-28 ">
                    <h1>Тип аккумулятора</h1>
                    <p className="text-gray-300 ml-5">
                        __________________________________
                    </p>
                    <h1 className="ml-5">Li-lon</h1>
                </div>
                <div className="flex mx-20 my-10 ml-28">
                    <h1>Емкость аккумулятора</h1>
                    <p className="text-gray-300 ml-5">
                        _______________________
                    </p>
                    <h1 className="ml-5">5000 мАч</h1>
                </div>

                <div className="text-left">
                    <h1 className="text-3xl my-4 ml-24 ">Отзывы</h1>
                </div>
                <div className="text-2xl flex ml-24">
                    <StarOutlinedIcon className="text-yellow-500" />
                    <StarOutlinedIcon className="text-yellow-500" />
                    <StarOutlinedIcon className="text-yellow-500" />
                    <StarOutlinedIcon className="text-yellow-500" />
                    <StarOutlinedIcon className="text-yellow-500" />
                </div>
                <div className="flex ml-56 -mt-7">
                    <h1 className=" text-2xl -mt-auto">5</h1>
                    <p className="text-gray-500 text-2xl">|1 отзывов</p>
                </div>
                <div className="flex w-96  h-20 ml-20 my-7 border-2 bg-">
                    <h1 className="ml-5">user998933557112</h1>
                    <div className="flex-none">
                        <div className="text-2xl mt-7 -ml-80 ">
                            <StarOutlinedIcon className="text-yellow-500" />
                            <StarOutlinedIcon className="text-yellow-500" />
                            <StarOutlinedIcon className="text-yellow-500" />
                            <StarOutlinedIcon className="text-yellow-500" />
                            <StarOutlinedIcon className="text-yellow-500" />
                        </div>
                    </div>
                </div>

                <h1 className="my-10"></h1>
            </div>
        </div>
    );
};
export default ProductDetails;