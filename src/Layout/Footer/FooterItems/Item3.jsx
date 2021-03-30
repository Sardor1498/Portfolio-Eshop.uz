import React from 'react';

const services = [
    {
        name: "Eshop Labs",
        href: "#"
    },
    {
        name: "Our Ads",
        href: "#"
    },
    {
        name: "Terms of Use",
        href: "#"
    },
    {
        name: "Privacy & Security",
        href: "#"
    },
    {
        name: "CA Privacy Rights",
        href: "#"
    },
    {
        name: "Do Not Sell My Personal Information",
        href: "#"
    },
    {
        name: "Request My Personal Information",
        href: "#"
    },
    {
        name: "Tax Exempt Program",
        href: "#"
    },
    {
        name: "California Supply Chain Security Act",
        href: "#"
    },
]

const Item3 = () => {
    return (
        <>
            <div>
                <p className="font-extrabold">Eshop.uz</p>
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

export default Item3;