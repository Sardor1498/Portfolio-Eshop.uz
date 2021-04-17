import React from 'react';
import Image from '../images/A21s.jpg';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';

const Office = () => {
    return (
        <>
            <div className="mt-4 bg-gray-300 h-14">
                <h4 className="text-left m-5 p-5 text-gray-50 cursor-pointer">
                    Главная / Смартфоны, телефоны, гаджеты, аксессуары / Смартфоны
                </h4>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex">
                    <div className="w-1/4 ml-5 p-5">
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
                    </div>
                    <div className="h-full bg-contain w-3/4">
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
                    </div>
                </div>
                <div className="text-left pl-5">
                    <h4 className="pt-2 text-pink-600">
                        Samsung
                    </h4>
                    <h1 className="text-4xl font-sans font-bold">
                        Samsung Galaxy A21s 4/64G
                    </h1>
                    <h1 className="text-4xl font-sans font-bold">
                        Prism Crush Black A315
                    </h1>
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
                        <span><AirportShuttleIcon /> <em>Быстрая доставка</em></span>
                    </div>
                    <h1 className="text-left pl-5 pt-5 font-semibold text-4xl">Коротко о товаре</h1>
                    <div className=" text-left pl-5 pt-5">
                        <p>Гарантийный срок (месяц): 12</p>
                        <p>Версия ОС: Android 10.0</p>
                        <p>Объем встроенной памяти: 32GB</p>
                        <p>Датчик Face ID: Есть</p>
                    </div>
                    <div className="text-left text-3xl pl-5 pt-5 font-semibold">
                        <span>2 091 000 сум</span>
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
        </>
    )
};
export default Office;