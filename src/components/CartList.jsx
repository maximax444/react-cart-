import React from "react";
import CartElement from "./CartElement";

function CartList({ prods, remove }) {
    if (!prods.length) {
        return (
            <h4>
                Товаров в корзине нет!
            </h4>
        )
    }
    return (

        <div>

            {prods.map(prod =>
                <CartElement remove={remove} prod={prod} key={prod.prodId} />
            )}
        </div>
    );
}

export default CartList;
