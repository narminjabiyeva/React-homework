import React, {Component} from 'react';
import Button from "../Button/Button";
import "./CartList.scss"
import ModalWindow from "../ModalWindow/ModalWindow";

class CartProduct extends  Component{
    state = {
      modalWindow:false
    };

    toggleModalWindow = () =>{
        this.setState({modalWindow :!this.state.modalWindow});
    };

    clickHandler = () =>{
        this.toggleModalWindow();
        this.props.removeFromCart(this.props.productNumber);

    };


    render() {
        return (
            <div className={"cart"}>
                <img className={"cart-image"} src={this.props.productImg} alt="added product"/>
                <p className={"cart-name"}>{this.props.productName}</p>
                <div>
                    <span className={"cart-price"} >{this.props.productPrice}</span>
                    <Button text={"Delete"} clicked={this.toggleModalWindow} />
                </div>
                {
                    this.state.modalWindow ?
                        <ModalWindow closed={this.toggleModalWindow}
                                     windowtext={"Do you want to delete this product from cart?"}
                                     headertext={"Delete From Cart"}
                                     action={[<Button text={"Delete"} clicked={this.clickHandler} />,
                                         <Button text={"Cancel"} clicked={this.toggleModalWindow}/>
                                     ]}
                        /> : null
                }

            </div>
        );
    }


};

export default CartProduct;