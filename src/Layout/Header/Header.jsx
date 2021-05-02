import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import HiddenPanel from "../Menu/HiddenPanel";
import SearchPanel from "./SearchPanel/SearchPanel";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5"
    }
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem);

const Header = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.target);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div
            className="grid md:grid-cols-3 sm:grid-cols-1 bg-gray-800 gap-2
         md:place-content-center sm:h-22 md:h-14 md:min-h-full"
        >
            <div className="flex justify-start">
                <HiddenPanel catalogs={props.catalogs} />
            </div>
            <div
                className="grid md:place-content-center justify-end ml-20 
            sm:ml-0 -mt-8 sm:-mt-0 w-3/5 sm:w-3/5 md:w-full"
            >
                <SearchPanel />
            </div>
            <div className="text-white flex justify-around md:mt-2">
                <span className="mr-1">
                    {props.isAuthorized && props.user ? (
                        <>
                            <button
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                className="bg-transparent hover:bg-white-200 text-white font-semibold py-1 px-2 rounded shadow"
                                onClick={handleClick}
                            >
                                <AccountCircleIcon className="cursor-pointer mr-1" />
                                {props.user.name}
                            </button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <SettingsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Настройки" />
                                </StyledMenuItem>
                                <StyledMenuItem onClick={props.logout}>
                                    <ListItemIcon>
                                        <ExitToAppIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Выход" />
                                </StyledMenuItem>
                            </StyledMenu>
                        </>
                    ) : (
                        <Link className="text-white" to="login">
                            Login
                        </Link>
                    )}
                </span>
                <span className="mr-2">
                    <FavoriteBorderIcon className="mr-2 cursor-pointer" />
                    My Items
                </span>
                <span className="mr-2">
                    <ShoppingCartIcon className="cursor-pointer" />
                    Корзина
                </span>
            </div>
        </div>
    );
};

export default Header;