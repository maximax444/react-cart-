import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
function CartStock(props) {
    const [stock, setStock] = useState({ stockNum: '' })
    const addNewStock = (e) => {
        e.preventDefault();
        props.change({ ...stock })
        setStock({ stockNum: '' })

    }
    const delStock = (e) => {
        e.preventDefault();
        props.del({ ...stock })
        setStock({ stockNum: '' })

    }
    return (

        <form action="">
            <MyInput
                value={stock.stockNum}
                onChange={e => setStock({ ...stock, stockNum: e.target.value })}
                type="number"
                placeholder="размер скидки" />
            <MyButton onClick={addNewStock}>Добавить</MyButton>
            <MyButton onClick={delStock}>Удалить</MyButton>
        </form>
    );
}

export default CartStock;
