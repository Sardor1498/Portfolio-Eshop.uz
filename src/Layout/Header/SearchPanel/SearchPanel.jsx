import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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


    const handleChange = (e) => {
        let filtered = product.filter(result => {
            return result.description.match(new RegExp(`${e.target.value}`, 'gi')) ||
            result.brandName.match(new RegExp(`${e.target.value}`, 'gi')) ||
            result.title.match(new RegExp(`${e.target.value}`, 'gi'))
        })
        setSearchProducts(filtered)
    }

    return (
        <Paper component="form" className={classes.root + " h-8"}>
            <InputBase
                className={classes.input}
                placeholder="Search Eshop.uz"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={(e) => handleChange(e)}
            />
            <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}