import React, { useState, useEffect } from 'react';
import RecipeReviewCard from './RecipeReviewCard';


const SaleComponent = (props) => {

    // function SaleComponent() {
    //     const [product, setProduct] = React.useState([])
    //     const [brands, setBrands] = React.useState([])
    //     const [brand, setBrand] = React.useState('')

    //     useEffect(() => {
    //         const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    //         const url = 'https://avtodoka-msk.ru/aimylogic-mission.json'
    //         fetch(proxyUrl + url)
    //             .then(response => response.json())
    //             .then(products => {
    //                 setProduct(products)
    //                 const brands = []
    //                 products.map(product => {
    //                     return (
    //                         brands.push(...product.brend)
    //                     )
    //                 })
    //                 setBrands([...new Set(brands)])
    //             })
    //     }, [])

    //     function toggleBrand(e) {
    //         setBrand(e.target.value)

    //         setProduct(
    //             product.filter(product => {
    //                 if ([...product.brend].includes(e.target.value)) {
    //                     return true
    //                 }
    //             })
    //         )

    //     }

    const [product, setProduct] = useState();

    const getProduct = () => {
        let elem;
        let arr = [];
        for (let i = 0; i <= 7; i++) {
            elem = props.products[i];
            arr.push(elem);
        }
        setProduct(arr);

    }

    useEffect(() => {
        if (props.products.length !== 0) {
            getProduct();
        }
    }, [props.products])

    return (
        <div>
            <span className="text-xl font-bold text-left">Товары на распродаже</span>
            <div className="grid grid-cols-11">
                <div className="col-span-3">
                    <img
                        src="https://olcha.uz/uploads/advertising/images/extra/F5LdMy45DNa3b8OvN4yTXRqkptLUyX90yU4x1Rpn.png"
                        alt="Rasm"
                        className="sticky top-0"
                    />
                </div>
                <div className="col-span-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-2">
                        {
                            product && product !== [] ? (
                                product.map((item, index) => (
                                    <div key={index} className="text-red-500">
                                        <RecipeReviewCard
                                            productsIsLoaded={props.productsIsLoaded}
                                            data={item}
                                        />
                                    </div>
                                ))

                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleComponent;