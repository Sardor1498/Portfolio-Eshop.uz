import React, { useState } from 'react';
import Modal from '../components/Modal';
import AddProduct from './AddProducts';
import AddBrand from './AddBrand';
import AddCategory from './AddCategory';
import AddCatalog from './AddCatalog';

const Add = (props) => {
    return (
        <>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 mt-3">
                <div>
                    <Modal
                        openBtn="Add product"
                        modalHeaderTitle="Добавить Продукт"
                        sosTitle="Добавление различных товаров на сайт"
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
                        sosTitle="Добавление на сайт разных брендов"
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
                        sosTitle="Добавляйте на сайт разные категории"
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
                        sosTitle="Добавляйте на сайт различные каталоги"
                        component={
                            <AddCatalog
                                createCatalog={props.createCatalog}
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