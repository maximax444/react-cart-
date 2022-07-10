import React, { useState } from "react";
import CartForm from "./CartForm";
import CartStock from "./CartStock";
import CartEnd from "./CartEnd";
import CartList from "./CartList";
function Cart() {
    const [stocks, setStocks] = useState([{ isStock: 0, myStock: 0 }
    ]);
    const [prods, setProds] = useState([
    ]);
    const createProd = (newProd) => {
        if (stocks.isStock == 1) {
            newProd.prodPrice2 = +newProd.prodPrice * ((100 - +(stocks.myStock)) / 100);

        }
        setProds([...prods, newProd])
    }
    const removeProd = (prod) => {
        setProds(prods.filter(p => p.prodId !== prod.prodId))
    }
    const changeProd = (stock) => {
        for (let i = 0; i < prods.length; i++) {
            prods[i].prodPrice2 = +prods[i].prodPrice * ((100 - +(stock.stockNum)) / 100);
        }
        stocks.isStock = 1;
        stocks.myStock = stock.stockNum;
        setProds([...prods])
    }
    const delProd = (stock) => {
        for (let i = 0; i < prods.length; i++) {
            prods[i].prodPrice2 = '';
            console.log(prods[i].prodPrice2);
        }
        stocks.isStock = 0;
        setProds([...prods])
    }
    return (
        <div>
            <CartForm create={createProd} />
            <CartList remove={removeProd} prods={prods} />
            <br /><br /><br /><br /><br />
            <CartStock change={changeProd} del={delProd} />
            <CartEnd prods={prods} />
        </div>
    );
}

export default Cart;
