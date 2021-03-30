import './App.css';
import React, { Component, useEffect } from "react";
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

const Main = props => {

  useEffect(() => {
    props.getProducts();
    props.getCatalogs();
    props.getCategories();
    props.getBrands();
  }, []);

  return (
    <div className="App">
      <div className="sticky top-0 z-20">
        <Header 
          catalogs={props.catalogs}
        />
      </div>
      <div>
        <ContentMain 
          data={props}
        />
      </div>
      <div>
        <Footer />
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
  //currentUser: state.authReducer.currentUser,
  //initialized: state.authReducer.initialized
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(productsAPI.getProducts()),
  createProduct: data => dispatch(productsAPI.createProduct(data)),
  getCatalogs: () => dispatch(catalogsAPI.getCatalogs()),
  createCatalog: catalog => dispatch(catalogsAPI.createCatalog(catalog)),
  getCategories: () => dispatch(categoriesAPI.getCategories()),
  createCategories: category => dispatch(categoriesAPI.createCategories(category)),
  getBrands: () => dispatch(brandsAPI.getBrands()),
  createBrand: brand => dispatch(brandsAPI.createBrand(brand))
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