import React, {Component} from 'react';
import FavoriteProduct from "./FavoriteProduct";
import "./FavoritesList.scss"

class FavoritesList extends Component{
    state = {
        favoriteProducts: JSON.parse(localStorage.getItem("favorites"))
    };


    removeFromFavorites = (id) =>{
        let fav = JSON.parse((localStorage.getItem("favorites")));
        let newFav=[];
        newFav = fav.filter(product=>product.number !== id);
        localStorage.setItem("favorites",JSON.stringify(newFav));
        this.setState({  favoriteProducts: JSON.parse(localStorage.getItem("favorites"))});
    };




    render() {

        return (
            <div className={"favorites-list"}>
                {this.state.favoriteProducts.map((product) => {
                    return <FavoriteProduct key={product.number}
                                            productName={product.name}
                                            productPrice={product.price}
                                            productImg={product.path}
                                            removeFromFavorites={this.removeFromFavorites}
                                            productNumber={product.number}
                    />
                })}
            </div>
        );
    }


};

export default FavoritesList;