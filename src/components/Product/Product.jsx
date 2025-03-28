import React from 'react'

const Product = ({product}) => {
    console.log(product);
    const {brand, battery, display, image, model, price, processor, ram, release_year, storage} = product
  return (
    <>
     <div>
        {brand}
        <h4>{price}</h4>
     </div>
    </>
  )
}

export default Product