import React, {useState} from 'react';
import {MdStar} from "react-icons/all";
import "./FavoritesList.scss"
const FavoriteProduct = props => {
    const [starColor,setStarColor] = useState("gold");


    const clickHandler = () => {

            props.removeFromFavorites(props.productNumber);
            setStarColor("black")
    };

    return (
        <div className={"card"}>
            <img src={props.productImg} alt ="product" className={"card-img"}/>
            <p className={"card-name"}>name {props.productName}</p>

            <div className={"card-price-button"}>
                <span className={"card-price"}>price {props.productPrice}</span>
                <span className={"card-star"} onClick={clickHandler}>
                        <MdStar
                            color={starColor}
                            size="2em"
                            style={{ padding: "2px"}}
                        />
                    </span>
            </div>
        </div>
    )
};

export default FavoriteProduct;