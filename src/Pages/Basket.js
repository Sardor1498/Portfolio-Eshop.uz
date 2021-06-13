import React, { useState, useEffect } from "react";
import RecipeReviewCard from "../components/RecipeReviewCard";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             // width: '25ch',
//         },
//     },
// }));

const Basket = (props) => {
    // const classes = useStyles();

    // console.log(props)
    return (
        <div className="my-6">
            <div className="flex justify-start bg-gray-100 py-4 text-gray-900">
                <Link className="text-gray-900" to="/">
                    Главная /
                </Link>
                <Link className="text-gray-900" to="/basket">
                    Корзина
                </Link>
            </div>
            <div className="flex justify-start font-bold mt-3 text-2xl font-sans pl-4">
                Корзина
            </div>
            <div className="grid grid-cols-1 my-4">
                <div className="text-gray-300">
                    <ShoppingCartIcon style={{ fontSize: "200px" }} />
                    <div className="text-2xl text-gray-400 font-semibold">В вашей корзине пусто? Не беда!</div>
                    <div>Начните выбирать товары из широкого ассортимента нашего каталога.</div>
                    <br />
                    <Button variant="contained" color="secondary">
                        <Link to="/">
                            ПЕРЕЙТИ К ПОКУПКАМ
                        </Link>
                    </Button>
                </div>
            </div>

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
export default Basket;