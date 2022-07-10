import React from "react";
import MyButton from "./UI/button/MyButton";

function CartElement(props) {
    console.log(props.prod)
    if (props.prod.prodPrice2 != '') {
        return (

            <div className="el">
                Id: {props.prod.prodId} <br />
                Название: {props.prod.prodName}
                <span>Цена: <div className="tdo">{props.prod.prodPrice}</div> {props.prod.prodPrice2} <br /></span>
                <MyButton onClick={() => props.remove(props.prod)}>Удалить из корзины</MyButton>
            </div>
        );
    }
    return (

        <div className="el">
            Id: {props.prod.prodId} <br />
            Название: {props.prod.prodName} <br />
            <span>Цена: {props.prod.prodPrice} </span>
            <MyButton onClick={() => props.remove(props.prod)}>Удалить из корзины</MyButton>
        </div>
    );
}

export default CartElement;
