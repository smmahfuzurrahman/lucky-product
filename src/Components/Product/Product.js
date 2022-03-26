import React from 'react';
import'./Product.css';
const Product = (props) => {
    const {name, img , price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>Name: {name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={()=> props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;