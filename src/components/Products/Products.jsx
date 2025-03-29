import React, { use, useEffect, useState } from 'react'
import Product from '../Product/Product';

const Products = ({ productsPromise, }) => {
  const productData = use(productsPromise);
    const [cart, setCart] = useState([])

    useEffect(()=>{
      const cartIds= getCartFromLocaleStorage()
      const storedCart = []
      for(const id of cartIds){
        const productItem = productData.find(item=>item.id === id)
        if(productItem){
          storedCart.push(productItem.brand)
        }
      }
      setCart(storedCart)
    },[cart])
    const getCartFromLocaleStorage =()=>{
        const cartFromLocaleStorage = localStorage.getItem("cart");
        if (cartFromLocaleStorage) {
          const cartItems = JSON.parse(cartFromLocaleStorage);
          return cartItems;
        }
        return [];
    }
    const handleCart = (product) =>{     
       const cartItems = getCartFromLocaleStorage()
       const newCart = [...cartItems, product.id]
       localStorage.setItem("cart", JSON.stringify(newCart))
    }

    const handleRemoveCartProduct = (removeProduct)=>{
    setCart(cart.filter(item=> item !== removeProduct))
    }

    
    
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