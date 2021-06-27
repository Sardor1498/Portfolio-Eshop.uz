import React, { useState, useEffect } from 'react';
import RecipeReviewCard from './RecipeReviewCard'


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
        setProduct(props.products);
    }, [props.products])

    return (
        <div>
            <div className="grid grid-cols-11">
                <div className="col-span-3">

                </div>
                <div className="col-span-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-2">
                        {/* {brands.length ? (
                            <div className="row">
                                <div className="col-3">
                                    <select value={brand} onChange={toggleBrand}>
                                        <option value={''}>Выбрать бренд</option>

                                        {brands.map((brend, index) => {
                                            return (
                                                <option value={brend} key={index}>{brend}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        ) : null}
                        {product.length ? (

                            <div className="row">

                                {product.map(product => {
                                    return (

                                        <RecipeReviewCard
                                            key={product.id}
                                            product={product}
                                        />
                                    )
                                })}


                            </div>
                        ) : null}
                    </div>
) */}


                        {
                            product !== [] ? (
                                <div className="text-red-500">
                                    <RecipeReviewCard
                                        productsIsLoaded={props.productsIsLoaded}
                                        data={product}
                                    />
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleComponent;
