import React from 'react'

const Product = ({product}) => {
    console.log(product);
    const {brand, battery, display, image, model, price, processor, ram, release_year, storage} = product
  return (
    <>
     <div className='card'>
        {brand}
        <h4>{price}</h4>
        <img width={400} height={300} src={image} alt="" />
     </div>
    </>
  )
}

export default Product