import React from 'react';

const services = [
    {
        name: "Eshop+",
        href: "#"
    },
    {
        name: "Grocery Pickup & Delivery",
        href: "#"
    },
    {
        name: "Money Center",
        href: "#"
    },
    {
        name: "Eshop credit card",
        href: "#"
    },
    {
        name: "Eshop Pay",
        href: "#"
    },
    {
        name: "Weekly Ad",
        href: "#"
    },
    {
        name: "Other Services",
        href: "#"
    },
]

const Item1 = () => {
    return (
        <>
            <div>
                <p className="font-extrabold">Eshop Services</p>
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

export default Item1;