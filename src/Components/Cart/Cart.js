import React from 'react';
import'./Cart.css'
const Cart = ({cart}) => {
    let cartName = [];
    const choose = () => {
        console.log('Clicked');
    }
    console.log(choose);
    for (const product of cart){
        if (cartName.length >= 4){
            
        }
        else{
            cartName.push(product.name) 
        }
        console.log(cartName);
    }
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            {
                cartName.map((cart) => {
                    return(
                        <div>
                            <p>{cart}</p>
                        </div>
                    );
                })
            }
            <div>
                <button onClick={choose()}>CHOOSE 1 FOR ME</button> <br /> 
                <button>CHOOSE AGAIN</button>
            </div>
        </div>
    
    );
};

export default Cart;