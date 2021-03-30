import React from 'react';
import BarItems1 from './Items/BarItems1';
import BarItems2 from './Items/BarItems2';
import BarItems3 from './Items/BarItems3';
import BarItems4 from './Items/BarItems4';
import BarItems5 from './Items/BarItems5';

const SideBar = () => {
    return (
        <>
        <span className="font-extrabold mt-5">New Films & Games</span>
        <div className="grid md:grid-cols-5 gap-5 sm:grid-cols-2 m-4">
            <BarItems1 />
            <BarItems2 />
            <BarItems3 />
            <BarItems4 />
            <BarItems5 />
        </div>
        </>
    );
};

export default SideBar;