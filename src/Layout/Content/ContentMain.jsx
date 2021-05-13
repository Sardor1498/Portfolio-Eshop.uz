import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Home';
import Appliances from '../../Pages/Appliances';
import Phones from '../../Pages/Phones';
import Sports from '../../Pages/Sports';
import Office from '../../Pages/Office';
import Tv from '../../Pages/Tv';
import Notebooks from '../../Pages/Notebooks';
import Content from './Content';
import AddProduct from '../../Pages/AddProducts';
import Test from '../../Pages/Test/Test';
import AddCategory from '../../Pages/AddCategory';
import AddCatalog from '../../Pages/AddCatalog';
import AddBrand from '../../Pages/AddBrand';
import Add from '../../Pages/Add';
import Register from '../../Pages/Register';
import Login from '../../Pages/Login';
import ProductDetails from '../../Pages/ProductDetails';
import Header from '../Header/Header';
import Favorites from '../../Pages/Favorites';
import Basket from '../../Pages/Basket';

const ContentMain = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home 
                        products={props.data.products}
                        productsIsLoaded={props.data.productsIsLoaded}
                        createProduct={props.data.createProduct}
                        getProducts={props.data.getProducts}
                    />
                </Route>
                <Route path="/phones">
                    <Phones categories={props.data.categories}
                        products={props.data.products}
                        brands={props.data.brands}
                        productsIsLoaded={props.data.productsIsLoaded}
                    />
                </Route>
                <Route path="/notebooks">
                    <Notebooks 
                        categories={props.data.categories}
                        products={props.data.products}
                        brands={props.data.brands}
                        productsIsLoaded={props.data.productsIsLoaded}
                    />
                </Route>
                <Route path="/tv">
                    <Tv 
                        categories={props.data.categories}
                        products={props.data.products}
                        brands={props.data.brands}
                        productsIsLoaded={props.data.productsIsLoaded}
                    />
                </Route>
                <Route path="/appliances">
                    <Appliances />
                </Route>
                <Route path="/office">
                    <Office />
                </Route>
                <Route path="/sports">
                    <Sports />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exat path="/login">
                    <Login login={props.data.login}/>
                </Route>
                <Route path="/addproduct">
                    <AddProduct
                        createProduct={props.data.createProduct}
                        categories={props.data.categories}
                        brands={props.data.brands}
                    />
                </Route>
                <Route path="/addcategory">
                    <AddCategory
                        createCategories={props.data.createCategories}
                        catalogs={props.data.catalogs}
                    />
                </Route>
                <Route path="/addcatalog">
                    <AddCatalog
                        createCatalog={props.data.createCatalog}
                        categories={props.data.categories}
                    />
                </Route>
                <Route path="/addbrand">
                    <AddBrand
                        createBrand={props.data.createBrand}
                        categories={props.data.categories}
                    />
                </Route>
                <Route path="/test">
                    <Test />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login login={props.data.login}/>
                </Route>
                <Route path="/add">
                    <Add 
                        createProduct={props.data.createProduct}
                        createBrand={props.data.createBrand}
                        createCategories={props.data.createCategories}
                        createCatalog={props.data.createCatalog}
                        categories={props.data.categories}
                        catalogs={props.data.catalogs}
                        brands={props.data.brands}
                        products={props.data.products}
                        productsIsLoaded={props.data.productsIsLoaded}
                    />
                </Route>
                <Route path="/details/:id">
                    <ProductDetails getProductDetail={props.data.getProductDetail}
                    getCurrentProduct={props.data.getCurrentProduct} alixoja="Valixoja"/>
                </Route>
                <Route path="/favorites">
                    <Favorites
                        products={props.data.products}
                        getProducts={props.data.getProducts}
                        filterFavorites={props.data.filterFavorites}
                    />
                </Route>
                <Route path="/basket">
                    <Basket
                        products={props.data.products}
                        getProducts={props.data.getProducts}
                        filterBaskets={props.data.filterBaskets}
                    />
                </Route>
            </Switch>
        </div>
    )
};

export default ContentMain;