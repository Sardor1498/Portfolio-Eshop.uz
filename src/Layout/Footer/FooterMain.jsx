import React from 'react';
import Item1 from './FooterItems/Item1';
import Item2 from './FooterItems/Item2';
import Item3 from './FooterItems/Item3';
import Item4 from './FooterItems/Item4';
import Item5 from './FooterItems/Item5';

const FooterMain = () => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-1 my-5">
            <Item1 />
            <Item2 />
            <Item3 />
            <Item4 />
            <Item5 />
        </div>
    )
};

export default FooterMain;