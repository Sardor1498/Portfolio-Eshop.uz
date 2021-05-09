import React, { useState, useEffect } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Image from '../images/A21s.jpg';
import { useParams } from 'react-router-dom';
import StarOutlineIcon from '@material-ui/icons/StarOutline';


const ProductDetails = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const [details, setDetails] = useState({});

    const getProduct = async () => {
        let resp = await props.getCurrentProduct(id);
        setProduct(resp);
        console.log(resp);
    }

    const getDetail = async () => {
        let res = await props.getProductDetail(id);
        setDetails(res);
        console.log(res);
    }

    useEffect(() => {
        getProduct();
        getDetail();
    }, [])

    return (
        <>
            <div className="md:grid grid-cols-2 sm:grid-cols-2 space-y-4 xl:grid-cols-2 lg:grid-cols-2">
                <div className="md:flex sm:flex xl:flex lg:flex block">
                    <div className="md:w-1/4 sm:w-1/4 lg:w-1/4 xl:w-1/4 w-1/2 grid gap-4 grid-cols-1 p-5">
                        {/* <div className="md:grid grid-cols-1 sm:grid grid-cols-1 xl:grid grid-cols-1 lg:grid grid-cols-1 grid-cols-3">
                            <img
                                className="
                                rounded-2xl
                                justify-center
                                border-2
                                border-gray-100 
                                bg-gray-50 mt-5"
                                src={Image}
                                alt=""
                            />
                            <img
                                className="
                                rounded-2xl
                                justify-center
                                border-2
                                border-gray-100 
                                bg-gray-50 mt-5"
                                src={Image}
                                alt=""
                            />
                            <img
                                className="
                                rounded-2xl
                                justify-center
                                border-2
                                border-gray-100 
                                bg-gray-50 mt-5"
                                src={Image}
                                alt=""
                            />
                        </div> */}
                    </div>
                    <div className="w-3/4 p-5">
                        <img
                            className="
                                justify-center
                                border-2
                                border-gray-100 
                                bg-gray-50 mt-5"
                            src={Image}
                            alt=""
                        />
                    </div>
                </div>
                <div className="text-left pl-5">
                    <p className="pt-2 text-pink-600">
                        {product.brandName}
                    </p>
                    <p className="text-4xl font-sans font-bold">{product.title} {details.memoryPhone}GB</p>
                    {/* <h1 className="text-4xl font-sans font-bold">
                        Prism Crush Black A315
                    </h1> */}
                    <br />
                    <div className="flex">
                        <div className="text-left text-yellow-500 pl-5">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                        </div>
                        <div className="text-gray-300 pl-3">
                            <span>Отзывы (4)</span>
                        </div>
                        <div className="text-gray-300 pl-3">
                            <span><MenuBookIcon /> В сравнение</span>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <div className="text-left pl-5 pt-5 font-semibold">
                        <span><AirportShuttleIcon /> <em>Доставка: {details.delivery ? "Есть" : "Нет"}</em></span>
                    </div>
                    <h1 className="text-left pl-5 pt-5 font-semibold text-4xl"></h1>
                    <div className=" text-left pl-5 pt-5">
                        <p>Гарантийный срок (месяц): {details.warranty}</p>
                        <p>Версия ОС: {details.version}</p>
                        <p>Объем встроенной памяти: {details.memoryPhone} GB</p>
                        <p>Датчик Face ID: {details.faceId ? "Есть" : "Нет"}</p>
                    </div>
                    <div className="text-left text-3xl pl-5 pt-5 font-semibold">
                        <span>{product.price} $</span>
                    </div>
                    <div className="text-left pl-5 pt-5">
                        <h1>238000 сум/мес<span className="text-gray-300"> в рассрочку <InfoIcon /></span></h1>
                    </div>
                    <div className="flex pl-3 mt-3">
                        <div className="pl-2">
                            <Button variant="contained" color="secondary">Купить</Button>
                        </div>
                        <div className="pl-2">
                            <Button variant="outlined">Купить в рассрочку</Button>
                        </div>
                        <div className="pl-2">
                            <Button variant="outlined" color="secondary">Купить в один клик</Button>
                        </div>
                    </div>
                    <div className="flex pl-5 pt-5">
                        <p><CheckIcon className="text-green-500" />  Доставка по Узбекистану</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <div>
                    <div className="text-left">
                        <h1 className="text-3xl">
                            Характеристики и описание
                        </h1>
                        <h1 className="text-4xl">
                            Память и процессор смартфона
                    </h1>
                    </div>
                    <div className="flex">
                        <h1>Объем оперативной памяти </h1>
                        <p className="text-gray-300 ">_______________________</p>
                        <h1 className="">{details.ram} GB</h1>
                    </div>
                    <div className="flex">
                        <h1>Объем встроенной памяти</h1>
                        <p className="text-gray-300">_________________________</p>
                        <h1 className="">{details.memoryPhone} GB</h1>
                    </div>
                    <div className="flex">
                        <h1>Процессор </h1>
                        <p className="text-gray-300">
                            __________________________________________
                    </p>
                        <h1 className="">MediaTek Helio G80</h1>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl">Связь</h1>
                    </div>
                    <div className="flex">
                        <h1>Спутниковая навигация</h1>
                        <p className="text-gray-300">
                            ____________________________
                    </p>
                        <h1 className="ml-5">{details.navigation}</h1>
                    </div>
                    <div className="flex mx-20 my-10">
                        <h1>Стандарт</h1>
                        <p className="text-gray-300">
                            ____________________________________________
                    </p>
                        <h1 className="">{details.gsmStandart}</h1>
                    </div>
                    <div className="flex">
                        <h1>Wi-Fi </h1>
                        <p className="text-gray-300">
                            ________________________________________________
                    </p>
                        <h1 className="">{details.wiFiVersion}</h1>
                    </div>
                    <div className="flex">
                        <h1>Bluetooth</h1>
                        <p className="text-gray-300">
                            ___________________________________________
                    </p>
                        <h1 className="">{details.bluetoothVersion}</h1>
                    </div>
                    <div className="flex">
                        <h1>NFC</h1>
                        <p className="text-gray-300">
                            _________________________________________________
                    </p>
                        <h1 className="">{details.nfc ? " да" : " нет"}</h1>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl">Дисплей смартфона</h1>
                    </div>
                    <div className="flex">
                        <h1>Диагональ</h1>
                        <p className="text-gray-300">
                            __________________________________
                    </p>
                        <h1 className="">{details.diagonal}</h1>
                    </div>
                    <div className="flex">
                        <h1>Тип дисплея</h1>
                        <p className="text-gray-300">
                            _______________________
                    </p>
                        <h1 className="">Super AMOLED</h1>
                    </div>
                    <div className="flex">
                        <h1>Разрешениe экрана</h1>
                        <p className="text-gray-300">
                            _______________________________________
                    </p>
                        <h1 className="">2400x1080</h1>
                    </div>
                    <div className="flex">
                        <h1>Соотношение сторон</h1>
                        <p className="text-gray-300">
                            _________________________
                    </p>
                        <h1 className="">20:9</h1>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl">Камера смартфона</h1>
                    </div>
                    <div className="flex">
                        <h1>Фронтальная камера</h1>
                        <p className="text-gray-300">
                            ___________________________________________
                    </p>
                        <h1 className="">{details.frontalCamera} MP</h1>
                    </div>
                    <div className="flex">
                        <h1>Основная камера</h1>
                        <p className="text-gray-300">
                            ___________________________________________
                    </p>
                        <h1 className="">{details.mainCamera} MP</h1>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl">Питание</h1>
                    </div>
                    <div className="flex mx-20">
                        <h1>Тип аккумулятора</h1>
                        <p className="text-gray-300">
                            __________________________________
                    </p>
                        <h1 className="">{details.batteryType}</h1>
                    </div>
                    <div className="flex">
                        <h1>Емкость аккумулятора</h1>
                        <p className="text-gray-300">
                            _______________________
                    </p>
                        <h1 className="">{details.batteryCapacity} мАч</h1>
                    </div>

                    <div className="text-left">
                        <h1 className="text-3xl">Отзывы</h1>
                    </div>
                    <div className="text-2xl flex">
                        <StarOutlineIcon className="text-yellow-500" />
                        <StarOutlineIcon className="text-yellow-500" />
                        <StarOutlineIcon className="text-yellow-500" />
                        <StarOutlineIcon className="text-yellow-500" />
                        <StarOutlineIcon className="text-yellow-500" />
                    </div>
                    <div className="flex">
                        <h1 className=" text-2xl">5</h1>
                        <p className="text-gray-500 text-2xl">|1 отзывов</p>
                    </div>
                    <div className="flex w-96  h-20 border-2 bg-">
                        <h1 className="">user998933557112</h1>
                        <div className="flex-none">
                            <div className="text-2xl">
                                <StarOutlineIcon className="text-yellow-500" />
                                <StarOutlineIcon className="text-yellow-500" />
                                <StarOutlineIcon className="text-yellow-500" />
                                <StarOutlineIcon className="text-yellow-500" />
                                <StarOutlineIcon className="text-yellow-500" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default ProductDetails;