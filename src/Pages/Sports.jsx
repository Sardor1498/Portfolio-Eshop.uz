import React from 'react';
import Image from '../images/Sirojiddin.jpg';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const Sports = () => {
    return (
        <>
            <div className="grid grid-cols-2">
                <img className="w-20 h-20 border-2 border-gray-500 bg-gray-50 mt-5" src={Image} alt="" />
                <div className="text-left pl-5">
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
        </>
    )
};
export default Sports;