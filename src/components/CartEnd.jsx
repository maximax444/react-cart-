import React from "react";

let endPrice = 0;
let realPrice = 0;
let getStock = 0;
function CartEnd(props) {
    function printEnd() {
        endPrice = 0;
        realPrice = 0;
        getStock = 0;
        for (let i = 0; i < props.prods.length; i++) {
            realPrice += +props.prods[i].prodPrice;
            if (props.prods[i].prodPrice2) {
                endPrice += +props.prods[i].prodPrice2;
                getStock = 1;
            } else {
                endPrice += +props.prods[i].prodPrice;
            }

        }
    }
    printEnd()
    if (getStock == 1) {
        return (
            <h2>Итого: <div className="tdo">{realPrice}</div>{endPrice}  руб. ({props.prods.length} шт.)</h2>
        );
    }
    return (
        <h2>Итого: {endPrice} руб. ({props.prods.length} шт.)</h2>
    );
}

export default CartEnd;