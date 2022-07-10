import React from "react";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
function CartForm({ create }) {
    const [prod, setProd] = useState({ prodId: '', prodName: '', prodPrice: '',prodPrice2: '' })
    const addNewProd = (e) => {
        e.preventDefault();
        create({ ...prod })
        setProd({ prodId: '', prodName: '', prodPrice: '', prodPrice2: '' })

    }

    return (

        <form action="">
            <MyInput
                value={prod.prodId}
                onChange={e => setProd({ ...prod, prodId: e.target.value })}
                type="number"
                placeholder="ID товара" />
            <MyInput
                value={prod.prodName}
                onChange={e => setProd({ ...prod, prodName: e.target.value })}
                type="text"
                placeholder="Название товара" />
            <MyInput
                value={prod.prodPrice}
                onChange={e => setProd({ ...prod, prodPrice: e.target.value })}
                type="number"
                placeholder="Цена товара" />
            <MyButton onClick={addNewProd}>Добавить</MyButton>
        </form>
    );
}

export default CartForm;
