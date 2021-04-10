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

const ContentMain = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home products={props.data.products}
                        productsIsLoaded={props.data.productsIsLoaded}
                        createProduct={props.data.createProduct}
                    />
                </Route>
                <Route path="/phones">
                    <Content />
                    <Phones categories={props.data.categories}
                        products={props.data.products}
                        brands={props.data.brands}
                        productsIsLoaded={props.data.productsIsLoaded}
                    />
                </Route>
                <Route path="/notebooks">
                    <Content />
                    <Notebooks 
                        categories={props.data.categories}
                        products={props.data.products}
                        brands={props.data.brands}
                        productsIsLoaded={props.data.productsIsLoaded}
                    />
                </Route>
                <Route path="/tv">
                    <Content />
                    <Tv 
                        categories={props.data.categories}
                        products={props.data.products}
                        brands={props.data.brands}
                        productsIsLoaded={props.data.productsIsLoaded}
                    />
                </Route>
                <Route path="/appliances">
                    <Content />
                    <Appliances />
                </Route>
                <Route path="/office">
                    <Content />
                    <Office />
                </Route>
                <Route path="/sports">
                    <Content />
                    <Sports />
                </Route>
                <Route path="/addproduct">
                    <Content />
                    <AddProduct
                        createProduct={props.data.createProduct}
                        categories={props.data.categories}
                        brands={props.data.brands}
                    />
                </Route>
                <Route path="/addcategory">
                    <Content />
                    <AddCategory
                        createCategories={props.data.createCategories}
                        catalogs={props.data.catalogs}
                    />
                </Route>
                <Route path="/addcatalog">
                    <Content />
                    <AddCatalog
                        createCatalog={props.data.createCatalog}
                        categories={props.data.categories}
                    />
                </Route>
                <Route path="/addbrand">
                    <Content />
                    <AddBrand
                        createBrand={props.data.createBrand}
                        categories={props.data.categories}
                    />
                </Route>
                <Route path="/test">
                    <Content />
                    <Test />
                </Route>
                <Route path="/add">
                    <Content />
                    <Add 
                        createProduct={props.data.createProduct}
                        createBrand={props.data.createBrand}
                        createCategories={props.data.createCategories}
                        createCatalog={props.data.createCatalog}
                        categories={props.data.categories}
                        catalogs={props.data.catalogs}
                        brands={props.data.brands}
                    />
                </Route>
            </Switch>
        </div>
    )
};

export default ContentMain;