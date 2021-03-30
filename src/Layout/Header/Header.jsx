import React from 'react';
import HeaderMain from './HeaderMain';


const Header = (props) => {
    return (
        <>
        <HeaderMain 
            catalogs={props.catalogs}
        />
        </>
    );
};
export default Header;