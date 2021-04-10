import React from 'react';
import HiddenPanel from '../Menu/HiddenPanel';
import SearchPanel from './SearchPanel/SearchPanel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Popover from '@material-ui/core/Popover';


const HeaderMain = (props) => {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 bg-gray-800 gap-2 md:place-content-center sm:h-22 md:h-14 md:min-h-full">
            <div className="flex justify-start">
                <HiddenPanel 
                    catalogs={props.catalogs}
                />
            </div>
            <div className="grid md:place-content-center justify-end ml-20 sm:ml-0 -mt-8 sm:-mt-0 w-3/5 sm:w-3/5 md:w-full">
                <SearchPanel />
            </div>
            <div className="text-white flex justify-around md:mt-2">
                <span className="mr-2 cursor-pointer" href="#">
                    <AccountCircleIcon color="inherit" className="mr-2" />
                        Account
                </span>
                <span className="mr-2 cursor-pointer">
                    <FavoriteBorderIcon className="mr-2" />
                       My Items
                </span>
                <span>
                    <ShoppingCartIcon />
                </span>
            </div>
            
        </div>
    );
};

export default HeaderMain;