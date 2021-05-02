import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import Image from '../images/Sirojiddin.jpg';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import StarOutlineIcon from '@material-ui/icons/StarOutline';


const ProductDetails = (props) => {
    console.log(props);
    const { id } = useParams();
    const [details, setDetails] = useState({});
    console.log(id);

    const getDetail = async () => {
        let res = await props.getProductDetail(id);
        setDetails();
    }

    useEffect(() => {
        getDetail();
    }, [])

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1  xl:grid-cols-1 lg:grid-cols-1">
            <div className="grid grid-cols-2">
            <div className="pl-60">
                    <img className="p-5 w-96 h-100 border-2 border-gray-500 bg-gray-50 border-radius-2 mt-5" src={Image} alt="" />
                <img className="w-20 h-20 border-2 border-gray-500 bg-gray-50 mt-5" src={Image} alt="" />
                </div>
                <div className="text-left pl-5">
                    <h1>{props.alixoja}</h1>
                    <h1 className="pt-2">Samsung</h1>
                    <h1 className="text-4xl font-sans font-bold">Samsung Galaxy A10s 2/32GB</h1>
                    <h1 className="text-4xl font-sans font-bold">Black A107</h1>
                    <br />
                    <div className="flex">
                        <div className="text-left pl-5">
                            <StarOutlineIcon />
                            <StarOutlineIcon />
                            <StarOutlineIcon />
                            <StarOutlineIcon />
                            <StarOutlineIcon />
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
                        <span><AirportShuttleIcon /> <em>Быстрая доставка</em></span>
                    </div>
                    <h1 className="text-left pl-5 pt-5 font-semibold text-4xl">Коротко о товаре</h1>
                    <div className=" text-left pl-5 pt-5">
                        <p>Гарантийный срок (месяц): 12</p>
                        <p>Версия ОС: Android 9.0 (pie)</p>
                        <p>Объем встроенной памяти: 32GB</p>
                        <p>Датчик Face ID: Есть</p>
                    </div>
                    <div className="text-left text-3xl pl-5 pt-5 font-semibold">
                        <span>1 640 000 сум</span>
                    </div>
                    <div className="text-left pl-5 pt-5">
                        <h1>187000 сум/мес<span className="text-gray-300"> в рассрочку <InfoIcon /></span></h1>
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
                    <p className="text-gray-300 ml-5">
                        _______________________________________
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