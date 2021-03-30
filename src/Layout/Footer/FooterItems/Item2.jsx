import React from 'react';

const services = [
    {
        name: "Our Company",
        href: "#"
    },
    {
        name: "Store Directory",
        href: "#"
    },
    {
        name: "Digital Museum",
        href: "#"
    },
    {
        name: "Our Suppliers",
        href: "#"
    },
    {
        name: "Sell on Eshop.uz",
        href: "#"
    },
    {
        name: "Advertise With Us",
        href: "#"
    },
    {
        name: "Careers",
        href: "#"
    },
]

const Item2 = () => {
    return (
        <>
            <div>
                <p className="font-extrabold">Get to Know Us</p>
                <ul>
                    {services.map((service, index) => (
                        <li key={index} className="pt-2">
                            <span>
                                <a href={service.href} className="font-thin text-xs">{service.name}</a>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Item2;