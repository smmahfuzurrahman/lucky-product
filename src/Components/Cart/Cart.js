import React, { useState } from 'react';
import'./Cart.css'
const Cart = ({cart,removeCart }) => {
    let cartName = [];

    // const [ran , setran] = useState([]);

    for (const product of cart){
        if (cartName.length >= 4){
        }
        else{
            cartName.push(product.name) 
        }
    }
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            {
                cartName.map((cart) => {
                    return(
                        <div>
                            <p> * {cart}</p>
                        </div>
                    );
                })
            }
          
            <button className='button-1'>CHOOSE 1 FOR ME</button> <br /> 
            <button onClick={()=> removeCart()} className='button-2'>CHOOSE AGAIN</button>
            
        </div>
    
    );
};

export default Cart;