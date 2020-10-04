import React, {Component} from "react";
import CartProduct from "./CartProduct";

class CartList extends Component{

    state = {
      cart: JSON.parse(localStorage.getItem("added"))
    };

    removeFromCart = (id) => {
        let add = JSON.parse((localStorage.getItem("added")));
        let newAdd=[];
        newAdd= add.filter(product=>product.number !== id);
        localStorage.setItem("added",JSON.stringify(newAdd));
        this.setState({cart: JSON.parse(localStorage.getItem("added"))})
    };

render() {
    return (


        <div className={"cart-list"}>
            {
                this.state.cart.map((product) => {
                    return <CartProduct  key={product.number}
                                         productImg={product.path}
                                         productName={product.name}
                                         productPrice={product.price}
                                         productNumber={product.number}
                                         removeFromCart={this.removeFromCart}

                    />


                })
            }
        </div>

    );
}


};

export default CartList;