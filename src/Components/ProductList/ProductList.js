import React, {Component} from 'react';
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss"


class ProductList extends Component {
    state = {

        added:JSON.parse(localStorage.getItem("added")),
        favorites: JSON.parse(localStorage.getItem("favorites"))
    };


    addToCart = (id) =>{
        let add = JSON.parse(localStorage.getItem("added"));
        let addItem=this.props.products.filter(product => product.number === id);
        add.push(addItem[0]);
        localStorage.setItem("added",JSON.stringify(add));
        this.setState({added:JSON.parse(localStorage.getItem("added"))})
    };

    addToFavorites =(id) =>{
        let fav = JSON.parse((localStorage.getItem("favorites")));
        let favItem=this.props.products.filter(product => product.number === id);
        fav.push(favItem[0]);
        localStorage.setItem("favorites",JSON.stringify(fav));
        this.setState({  favorites: JSON.parse(localStorage.getItem("favorites"))});
    };

    removeFromFavorites = (id) =>{
        let fav = JSON.parse((localStorage.getItem("favorites")));
        let newFav=[];
        newFav = fav.filter(product=>product.number !== id);
        localStorage.setItem("favorites",JSON.stringify(newFav));
        this.setState({  favorites: JSON.parse(localStorage.getItem("favorites"))});
    };


    render() {
        return (
            <div className={"product-list-wrapper"}>
                <div className={"product-list"}>
                    {this.props.products.map((product) => {
                        return <ProductCard key={product.number}
                                            productName={product.name}
                                            productPrice={product.price}
                                            productImg={product.path}
                                            addToCart={this.addToCart}
                                            addToFavorites={this.addToFavorites}
                                            removeFromFvorites ={this.removeFromFavorites}
                                            productNumber={product.number}
                       />
                    })}




                </div>
            </div>

        );
    }
}

export default ProductList;