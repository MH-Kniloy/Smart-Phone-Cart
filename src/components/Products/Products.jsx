import React, { use, useState } from 'react'
import Product from '../Product/Product';

const Products = ({ productsPromise, }) => {
    const [cart, setCart] = useState([])

    const handleCart = (product) =>{
        const totalCart = [...cart, product.brand]
        setCart(totalCart)
    }

    const handleRemoveCartProduct = (removeProduct)=>{
    setCart(cart.filter(item=> item !== removeProduct))
    }

    const productData = use(productsPromise)
    
  return (
    <>
      <div>
        <h1>Cart</h1>
        <div className="grid">
          {cart.map((item) => (
            <div className="card">
              <h5>{item}</h5>
              <button onClick={()=>handleRemoveCartProduct(item)}>Remove Item</button>
            </div>
          ))}
        </div>
      </div>
      <div className="grid">
        {productData.map((product) => (
          <Product
            key={product.id}
            handleCart={handleCart}
            cart={cart}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default Products