import React, { useState, useEffect } from "react";
import RecipeReviewCard from "../components/RecipeReviewCard";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            // width: '25ch',
        },
    },
}));

const Basket = props => {
    const classes = useStyles();

    console.log(props)
    return (
        <>
            {/* <div className="flex justify-end border-2 border-gray-300">
                <div>
                    <input type="text" label="Введите промо код" required />
                    <button type="button" color="primary">OK</button>
                </div>

            </div> */}
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Введите промо код" variant="outlined" />
                <Button variant="contained" color="secondary">
                    OK
                </Button>
                <p className="flex">Стоимост: <p>         222000 сум</p></p>
                <p>Стоимост:          222000 сум</p>
                <p>Стоимост:          222000 сум</p>
            </form>
            {/* <div className="grid grid-cols-4 gap-5">
                {product !== []
                    ? filteredProducts.map((item, index) => (
                          <RecipeReviewCard
                              key={index}
                              data={item}
                              getProducts={props.getProducts}
                          />
                      ))
                    : null}
            </div> */}
        </>
    );
};
export default Basket;