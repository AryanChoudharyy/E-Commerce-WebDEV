function AddToCart({ product }) {
    console.log("add to cart", product.id);
    // useSelector
    function increase() {
        dispatch({type:"ADD_TO_CART" , payload:product})
    }
    function decrease() {
        dispatch({type:"REMOVE_FROM_CART" , payload:product })
    }
    let cart = useSelector((state)  => {
        return state.items[product.id] ? state.items[product.id].quantity : 0
    })
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        )
    }
}
export default AddToCart;