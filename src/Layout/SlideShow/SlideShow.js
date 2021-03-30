import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
    {
        photo:
            "https://cdn6.f-cdn.com/contestentries/1301217/27758306/5acbd1448d2c3_thumb900.jpg",
    },
    {
        photo:
            "https://www.fgdc.gov/img/slider/slider-bg-network.jpg/image",
    },
    {
        photo:
            "https://i.gadgets360cdn.com/large/remove_bg_1200x675_thumb_1612160350051.png",
    },
    {
        photo:
            "https://www.bgprod.com/bg-master/uploads/Questions_with_Casey-1680x440-3-4.jpg",
    },
    {
        photo:
            "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?fit=crop&h=1000&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Fbg%3D80000000%26txt%3DFree%2BStock%2BPhotos%26txtalign%3Dcenter%26txtclr%3Dfff%26txtfont%3DAvenir-Heavy%26txtpad%3D20%26txtsize%3D120%26w%3D1300&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10&txtsize=60&w=1500",
    },
];

const Slideshow = () => {
    return (
        <div>
            <Slide easing="ease">
                {slideImages.map((service, index) => (
                    <div key={index}>
                        <img src={service.photo} className="h-96 w-full mt-3" />
                    </div>
                ))}
            </Slide>
        </div>
    )
};

export default Slideshow;