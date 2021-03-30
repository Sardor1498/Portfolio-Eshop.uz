import React from 'react';

const services = [
    {
        name: "Video Films",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNzf2lSrb8xPQ276EKza-ZACr1dDK5OzHEg&usqp=CAU",
        href: "#"
    },
];


const BarItems1 = () => {
    return (
        <>
            <div>
                <ul>
                    {services.map((service, index) => (
                        <li key={index} className="pt-2">
                            <img src={service.src} alt="" />
                            <span>
                                <a href={service.href} className="font-thin text-xs">{service.name}</a>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default BarItems1;