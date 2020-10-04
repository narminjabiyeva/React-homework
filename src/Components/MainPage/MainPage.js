import React, {Component} from 'react';
import ProductList from "../ProductList/ProductList";
import "./MainPage.scss"
import {Link, Route} from "react-router-dom";
import CartList from "../CartList/CartList";
import FavoritesList from "../FavoritesList/FavoritesList";



class MainPage extends Component {

    state = {
        products : []
    };

    componentDidMount() {
        fetch("products.json")
            .then(r => r.json())
            .then(
                (data) => {
                    this.setState({products: data});
                },
            );
        localStorage.setItem('added', JSON.stringify([]));
        localStorage.setItem('favorites', JSON.stringify([]));
    }

    loadProductList = () => {
        return (
            <ProductList
                products={this.state.products}
            />

        );
    };

    loadCartList = () => {
        return(

            <CartList />

        );
    };

    loadFavoritesList = () => {
        return(

            <FavoritesList />

        );


    };
    render() {
        return (
                <div className={"main-page"}>
                    <header className={"header"}>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/cart"}>Cart</Link>
                        <Link to={"/favorites"}>Favorites</Link>
                    </header>
                    <Route exact path={"/"} component={this.loadProductList}/>
                    <Route exact path={"/cart"} component={this.loadCartList}/>
                    <Route exact path={"/favorites"} component={this.loadFavoritesList} />


            </div>

        );
    }
}

export default MainPage;