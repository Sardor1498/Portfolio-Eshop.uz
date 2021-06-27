
import React, { useState, useEffect } from "react";
import RecipeReviewCard from "../components/RecipeReviewCard";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, useParams } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InputSpinner from "../components/InputSpinner";
import axios from "axios";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             // width: '25ch',
//         },
//     },
// }));



const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Basket = (props) => {
    const [product, setProduct] = useState();
    const [count, setCount] = useState(1);
    const classes = useStyles();
    const { id } = useParams();

    // handleClick() {
    //     try {
    //         // Делаем что-то, что сгенерирует ошибку
    //     } catch (error) {
    //         this.setState({ error });
    //     }
    // }

    let url = "https://laravel-react-eshop.herokuapp.com"

    const getProduct = async () => {
        try {
            let res = await axios.get(`${url}/api/product/${id}`);
            if (res.data) {
                setProduct(res.data);
                console.log(res.data)
            }
        } catch (error) {
            console.log()
        }
    }


    useEffect(() => {
        if (id) {
            getProduct();
        }
    }, [])

    // console.log(props)
    return (
        <div>
            <div className="flex justify-start bg-gray-100 py-4 text-gray-900">
                <Link className="text-gray-900 font-serif" to="/">
                    Главная /
                </Link>
                <Link className="text-gray-900 font-serif" to="/basket">
                    Корзина
                </Link>
            </div>
            <div className="flex justify-start font-bold mt-3 text-2xl font-sans pl-4">
                Корзина
            </div>
            <br />

            {
                !product ? (
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
                ) : (
                    <>
                        <div className="grid grid-cols-4">
                            <div className="col-span-3 pl-4">
                                <div className="grid grid-cols-12 p-3 border rounded-lg border-gray-200">
                                    <div className="col-span-1 border">
                                        <img src={product.photo} alt={product.title} />
                                    </div>
                                    <div className="col-span-4">
                                        <div className="text-left text-md text-gray-300 pl-2 font-semibold">
                                            {product.title + " " + product.brandName}
                                        </div>
                                        <div className="text-left text-md pl-2 font-bold">
                                            {product.description}
                                        </div>
                                    </div>
                                    <div className="col-span-3">
                                        <div className="input-spinner">
                                            <InputSpinner
                                                setCount={setCount}
                                                count={count}
                                                product={product.price}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-3 pt-6">
                                        <span className="text-gray-600 text-2xl font-semibold">
                                            {(product.price * count) + " сўм"}
                                        </span>
                                    </div>
                                    <div className="col-span-1 px-2 py-1">
                                        <div className="grid grid-cols-3 h-14 text-gray-300 border cursor-pointer rounded-lg text-4xl">
                                            <div></div>
                                            <div>&times;</div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 border border-gray-200 rounded-lg mx-2">
                                <form>
                                    <TextField
                                        id="outlined-basic"
                                        label="Введите промо код"
                                        variant="outlined"
                                        margin="dense"
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                    >
                                        OK
                                    </Button>
                                    {/* <Button
                                        variant="contained"
                                        size="small"
                                        className="h-8"
                                        color="secondary">
                                        OK
                                    </Button> */}
                                </form>
                                <br />
                                <div className="grid grid-cols-2 pl-2">
                                    <div>
                                        <div className="text-left pl-2">Стоимость:</div>
                                        <div className="text-left pl-2">Скидка:</div>
                                        <div className="text-left pl-2">Всего к оплате:</div>
                                    </div>
                                    <div>
                                        <div className="text-right pr-2">{(product.price * count) + " сўм"}</div>
                                        <div className="text-right pr-2">0 сум</div>
                                        <div className="text-right pr-2">{(product.price * count) + " сўм"}</div>
                                    </div>
                                    <br />
                                </div>
                                <hr />
                                <br />
                                <div className="pb-4">
                                    <Link to="/checkout/:length?">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                        >
                                            Оформить заказ
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}

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