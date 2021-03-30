import React from 'react';

const services = [
    {
        name: "Help Center",
        href: "#"
    },
    {
        name: "Returns",
        href: "#"
    },
    {
        name: "Product Recalls",
        href: "#"
    },
    {
        name: "Accessibility",
        href: "#"
    },
    {
        name: "Contact Us",
        href: "#"
    },
    {
        name: "Store Pickup",
        href: "#"
    },
]

const Item4 = () => {
    return (
        <>
            <div>
                <p className="font-extrabold">Customer Service</p>
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

export default Item4;