import React from 'react';

const services = [
    {
        name: "Portable Air Conditioners",
        href: "#"
    },
    {
        name: "PS4",
        href: "#"
    },
    {
        name: "Trampoline",
        href: "#"
    },
    {
        name: "Skateboard",
        href: "#"
    },
    {
        name: "Outdoor Furniture",
        href: "#"
    },
    {
        name: "Nintendo Switch Lite",
        href: "#"
    },
]

const Item5 = () => {
    return (
        <>
            <div>
                <p className="font-extrabold">In The Spotlight</p>
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

export default Item5;