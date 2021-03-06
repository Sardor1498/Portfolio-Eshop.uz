import './App.css';
import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store from "./redux/redux-store";
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import ContentMain from './Layout/Content/ContentMain';
import { productsAPI } from './api/productsAPI';
import { catalogsAPI } from './api/catalogsAPI';
import { categoriesAPI } from './api/categoriesAPI';
import { brandsAPI } from './api/brandsAPI';
import { authAPI } from './api/usersAPI';
import { priceAPI } from './api/priceAPI';
import { detailsAPI } from './api/productsDetailsAPI';
import Content from './Layout/Content/Content';

const Main = props => {

  const [searchProducts, setSearchProducts] = useState([])
  console.log(searchProducts)
  
  useEffect(() => {
    props.getProducts();
    props.getCatalogs();
    props.getCategories();
    props.getBrands();
    props.getProfile();
  }, []);

  return (
    <div className="App">
      <div className="container mx-auto">
      <div className="sticky top-0 z-20">
        <Header 
          isAuthorized={props.isAuthorized}
          login={props.login}
          user={props.user}
          logout={props.logout}
          catalogs={props.catalogs}
          products={props.products}
          getProducts={props.getProducts}
          setSearchProducts={setSearchProducts}
        />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <ContentMain 
          searchProducts={searchProducts}
          data={props}
          login={props.login}
          price={props.price}
        />
      </div>
      <div>
        <Footer />
      </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.productsReducer.products,
  productsIsLoaded: state.productsReducer.loaded,
  catalogs: state.catalogsReducer.catalogs,
  catalogsIsLoaded: state.catalogsReducer.loaded,
  categories: state.categoriesReducer.categories,
  categoriesIsLoaded: state.categoriesReducer.loaded,
  brands: state.brandsReducer.brands,
  brandsIsLoaded: state.brandsReducer.loaded,
  isAuthorized: state.authReducer.isAuthorized,
  user: state.authReducer.user,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(productsAPI.getProducts()),
  getCurrentProduct: id => dispatch(productsAPI.getCurrentProduct(id)),
  createProduct: data => dispatch(productsAPI.createProduct(data)),
  getCatalogs: () => dispatch(catalogsAPI.getCatalogs()),
  createCatalog: catalog => dispatch(catalogsAPI.createCatalog(catalog)),
  getCategories: () => dispatch(categoriesAPI.getCategories()),
  createCategories: category => dispatch(categoriesAPI.createCategories(category)),
  getBrands: () => dispatch(brandsAPI.getBrands()),
  createBrand: brand => dispatch(brandsAPI.createBrand(brand)),
  login: user => dispatch(authAPI.login(user)),
  getProfile: () => dispatch(authAPI.getProfile()),
  logout: () => dispatch(authAPI.logout()),
  getProductDetails: (id) => dispatch(detailsAPI.getProductDetails(id)),
});

const MainContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Main);

const Eshop = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default Eshop;