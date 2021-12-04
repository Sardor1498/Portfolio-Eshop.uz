import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles(theme => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconButton: {
        padding: 10
    },
    divider: {
        height: 28,
        margin: 4
    }
}));


export default function SearchPanel({ product, setSearchProducts }) {

    const classes = useStyles();

    const [value, setValue] = useState("")
    const [boolean, setBoolean] = useState(false)


    let filtered
    let close

    const handleChange = (e) => {
        filtered = product.filter(result => {
            return result.description.match(new RegExp(`${e.target.value}`, 'gi')) ||
                result.brandName.match(new RegExp(`${e.target.value}`, 'gi')) ||
                result.title.match(new RegExp(`${(e.target.value)}`, 'gi'))
        })
        if (value === "") {
            setValue(close)
        } else {
            close = e.target.value
        }
    }


    const handleClick = () => {
        if(value === "" && boolean === false) {
            setBoolean(false)
            setValue("")
        }else {
            setBoolean(true)
            setSearchProducts(filtered)
            setValue(close)
        }
    }

    const clearInput = () => {
        setBoolean(false)
        setSearchProducts([])
        setValue("")
    }

    return (
        <Paper component="div" className={classes.root + " h-8"}>
            <InputBase
                className={classes.input}
                placeholder="Search all Products"
                // inputProps={{ "aria-label": "search google maps" }}
                onChange={(e) => handleChange(e)}
                value={value}
            />
            {
                boolean !== true ? (
                    <IconButton
                        type="button"
                        // className={classes.iconButton}
                        title="Введите запрос"
                        onClick={handleClick}
                    >
                        <SearchIcon />
                    </IconButton>
                ) : (
                    <IconButton
                        type="button"
                        className={classes.iconButton}
                        aria-label="search"
                        onClick={clearInput}
                    >
                        <ClearIcon />
                    </IconButton>
                )
            }
        </Paper>
    );
}