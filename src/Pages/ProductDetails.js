import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import Image from '../images/Sirojiddin.jpg';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import BuyPage from "./BuyPage";
import Modal from '../components/Modal';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core";
import { useSelector } from 'react-redux';
import BasketModal from "./BasketModal";



const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
};

const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
});

// const openBtnColor = {
//     backgroundColor: "red"
// }

const ProductDetails = props => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [details, setDetails] = useState({});
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();

    const getProduct = async () => {
        let res = await props.getCurrentProduct(id);
        setProduct(res);
    }
    const getDetails = async () => {
        let res = await props.getProductDetails(id);
        setDetails(res);
    };

    const totalM = useSelector((state) =>
        state.priceReducer !== {} ? state.priceReducer.price : null)

    useEffect(() => {
        getProduct();
        getDetails();
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="pl-60">
                        <img className="p-5 w-96 h-100 border-2 border-gray-500 bg-gray-50 mt-5" src={Image} alt="" />
                        <img className="w-20 h-20 border-2 border-gray-500 bg-gray-50 mt-5" src={Image} alt="" />
                    </div>
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
                                <span>???????????? (4)</span>
                            </div>
                            <div className="text-gray-300 pl-3">
                                <span><MenuBookIcon /> ?? ??????????????????</span>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <div className="text-left pl-5 pt-5 font-semibold">
                            <span><AirportShuttleIcon /> <em>?????????????? ????????????????</em></span>
                        </div>
                        <h1 className="text-left pl-5 pt-5 font-semibold text-4xl">?????????????? ?? ????????????</h1>
                        <div className=" text-left pl-5 pt-5">
                            <p>?????????????????????? ???????? (??????????): 12</p>
                            <p>???????????? ????: Android 9.0 (pie)</p>
                            <p>?????????? ???????????????????? ????????????: 32GB</p>
                            <p>???????????? Face ID: ????????</p>
                        </div>
                        <div className="text-left text-3xl pl-5 pt-5 font-semibold">
                            <span>1 640 000 ??????</span>
                        </div>
                        <div className="text-left pl-5 pt-5">
                            <h1>187000 ??????/??????<span className="text-gray-300"> ?? ?????????????????? <InfoIcon /></span></h1>
                        </div>
                        <div className="flex pl-3 mt-3">
                            <div className="pl-2">
                                <Button variant="contained" color="secondary">????????????</Button>
                            </div>
                            <div className="pl-2">
                                <Modal
                                    openBtn="?????????? ?? ??????????????????"
                                    component={
                                        <BuyPage price={product.price} />
                                    }
                                />
                            </div>
                            <div className="pl-2">
                                <Modal
                                    openBtn="?????????? ?? ??????????????????"
                                    component={
                                        <BuyPage price={product.price} />
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex pl-5 pt-5">
                            <p><CheckIcon className="text-green-500" />  ???????????????? ???? ??????????????????????</p>
                        </div>
                    </div>

                </div>

                <div className="grid-cols-1">
                    <div>
                        <h1 className="text-3xl">3 478 000 cym </h1>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl">
                            ???????????????????????????? ?? ????????????????
                        </h1>
                        <h1 className="text-4xl">
                            ???????????? ?? ?????????????????? ??????????????????
                        </h1>
                    </div>
                    <div className="flex">
                        <h1>?????????? ?????????????????????? ???????????? </h1>
                        <p className="text-gray-300 ">_______________________</p>
                        <h1 className="">4 GB </h1>
                    </div>
                    <div className="flex">
                        <h1>?????????? ???????????????????? ????????????</h1>
                        <p className="text-gray-300">_________________________</p>
                        <h1 className="">64GB </h1>
                    </div>
                    <div className="flex">
                        <h1>?????????????????? </h1>
                        <p className="text-gray-300">
                            __________________________________________
                        </p>
                        <h1 className="">MediaTek Helio G80</h1>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl">??????????</h1>
                    </div>
                    <div className="flex">
                        <h1>?????????????????????? ??????????????????</h1>
                        <p className="text-gray-300">
                            ____________________________
                        </p>
                        <h1 className="ml-5">{details.navigation}</h1>
                    </div>
                    <div className="flex mx-20 my-10">
                        <h1>????????????????</h1>
                        <p className="text-gray-300">
                            ____________________________________________
                        </p>
                        <h1 className="">GSM, 3G, 4G LTE</h1>
                    </div>
                    <div className="flex">
                        <h1>Wi-Fi </h1>
                        <p className="text-gray-300">
                            ________________________________________________
                        </p>
                        <h1 className="">Wi-Fi 802.11</h1>
                    </div>
                    <div className="flex">
                        <h1>Bluetooth</h1>
                        <p className="text-gray-300">
                            ___________________________________________
                        </p>
                        <h1 className="">Bluetooth 5,0</h1>
                    </div>
                    <div className="flex">
                        <h1>NFC</h1>
                        <p className="text-gray-300">
                            _________________________________________________
                        </p>
                        <h1 className="">Yes (market/region dependent)</h1>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl">?????????????? ??????????????????</h1>
                    </div>
                    <div className="flex">
                        <h1>??????????????????</h1>
                        <p className="text-gray-300">
                            __________________________________
                        </p>
                        <h1 className="">6.4"</h1>
                    </div>
                    <div className="flex">
                        <h1>?????? ??????????????</h1>
                        <p className="text-gray-300">
                            _______________________
                        </p>
                        <h1 className="">Super AMOLED</h1>
                    </div>
                    <div className="flex">
                        <h1>??????????????????e ????????????</h1>
                        <p className="text-gray-300">
                            _______________________________________
                        </p>
                        <h1 className="">2400x1080</h1>
                    </div>
                    <div className="flex">
                        <h1>?????????????????????? ????????????</h1>
                        <p className="text-gray-300">
                            _________________________
                        </p>
                        <h1 className="">20:9</h1>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl">???????????? ??????????????????</h1>
                    </div>
                    <div className="flex">
                        <h1>?????????????????????? ????????????</h1>
                        <p className="text-gray-300">
                            ___________________________________________
                        </p>
                        <h1 className="">20MP</h1>
                    </div>
                    <div className="flex">
                        <h1>???????????????? ????????????</h1>
                        <p className="text-gray-300">
                            ___________________________________________
                        </p>
                        <h1 className="">64MP + 8MP + 5MP + 5MP</h1>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl">??????????????</h1>
                    </div>
                    <div className="flex mx-20">
                        <h1>?????? ????????????????????????</h1>
                        <p className="text-gray-300">
                            __________________________________
                        </p>
                        <h1 className="">Li-lon</h1>
                    </div>
                    <div className="flex">
                        <h1>?????????????? ????????????????????????</h1>
                        <p className="text-gray-300">
                            _______________________
                        </p>
                        <h1 className="">5000 ??????</h1>
                    </div>

                    {/* <div className="text-left">
                        <h1 className="text-3xl">????????????</h1>
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
                        <p className="text-gray-500 text-2xl">|1 ??????????????</p>
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
                    </div> */}
                </div>
            </div>

        </>
    );
};
export default ProductDetails;