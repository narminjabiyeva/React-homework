import React, {Component} from 'react';
import Button from "../Button/Button";
import "./ProductCard.scss"
import { MdStar} from "react-icons/all";
import ModalWindow from "../ModalWindow/ModalWindow";
class ProductCard extends Component{
    state={
        starColor :"grey",
        isFavorite :false,
        modalWindow: false
    };

    toggleModalWindow = () =>{
        this.setState({modalWindow :!this.state.modalWindow});
    };


    clickHandler = () => {
        if (this.state.isFavorite === false){
            this.props.addToFavorites(this.props.productNumber);
            this.setState({starColor :"gold"})
        }else {
            this.props.removeFromFvorites(this.props.productNumber);
            this.setState({starColor :"grey"})
        }
        this.setState({isFavorite :!this.state.isFavorite});
    };

    render() {
        return (
            <div className={"card"}>
                <img src={this.props.productImg} alt ="product" className={"card-img"}/>
                    <p className={"card-name"}>{this.props.productName}</p>

                <div className={"card-price-button"}>
                    <span className={"card-price"}>{this.props.productPrice}</span>
                    <span className={"card-star"} onClick={this.clickHandler}>
                        <MdStar
                            color={this.state.starColor}
                            size="2em"
                            style={{ padding: "2px"}}
                        />
                    </span>
                    <Button text={"Add To Cart"} clicked={this.toggleModalWindow} />
                </div>

                {
                    this.state.modalWindow ?
                        <ModalWindow closed={this.toggleModalWindow}
                                     windowtext={"Do you want to add this product to cart?"}
                                     headertext={"Add To Cart"}
                                     action={[<Button text={"Add"} clicked={()=>{this.toggleModalWindow();this.props.addToCart(this.props.productNumber)}} />,
                                         <Button text={"Cancel"} clicked={this.toggleModalWindow}/>
                                     ]}
                        /> : null
                }

            </div>
        );
    }


}

export default ProductCard;