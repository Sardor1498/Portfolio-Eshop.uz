import React, { useState } from 'react';
import Modal from '../components/Modal';
import AddProduct from './AddProducts';
import AddBrand from './AddBrand';
import AddCategory from './AddCategory';
import AddCatalog from './AddCatalog';

const Add = (props) => {
    return (
        <>
            <div className="flex justify-center mt-3">
                <div>
                    <Modal
                        openBtn="Add product"
                        modalHeaderTitle="Добавить Продукт"
                        component={
                            <AddProduct
                                createProduct={props.createProduct}
                                categories={props.categories}
                                brands={props.brands}
                            />
                        }
                    />
                </div>
                <div>
                    <Modal
                        openBtn="Add brand"
                        modalHeaderTitle="Добавить Бренд"
                        component={
                            <AddBrand
                                createBrand={props.createBrand}
                                categories={props.categories}
                            />
                        }
                    />
                </div>
                <div>
                    <Modal
                        openBtn="Add Category"
                        modalHeaderTitle="Добавить Категорию"
                        component={
                            <AddCategory
                                createCategory={props.createCategory}
                                catalogs={props.catalogs}
                            />
                        }
                    />
                </div>
                <div>
                    <Modal
                        openBtn="Add Catalog"
                        modalHeaderTitle="Добавить Каталог"
                        component={
                            <AddCatalog
                                createCatalogs={props.createCatalogs}
                                categories={props.categories}
                            />
                        }
                    />
                </div>
            </div>
        </>
    )
};

export default Add;