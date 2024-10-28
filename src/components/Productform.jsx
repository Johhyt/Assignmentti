import {useState} from 'react'
import '../styles/Productform.css'


const Product = () => {

    const products = ["Potato", "Carrot", "Pumpkin", "Parsnip"]
    const prices = [4, 6, 2, 3]

    const [selectedIndex, setProductIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    
    const handleProductChange = (event) => {
        const index = event.target.selectedIndex;
        setProductIndex(index);
    };

    const handleQuantityChange = (change) => {
        const newQuantity = Math.max(0, quantity + change);
        setQuantity(newQuantity);
    };

    return(
        <div id='foormi'>
            <h2>Select awesome product</h2>
            <label>Product</label>
            <select value={products[selectedIndex]} onChange={handleProductChange}>
                {products.map((product, index) => (
                    <option key={index} value={product}>
                        {product} - {prices[index]} €
                    </option>
                ))}
            </select>
            <br/>
            <div className="quantity">
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>

        </div>

    );
}

export default Product;