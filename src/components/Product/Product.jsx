import React from 'react'

const Product = ({product}) => {
    console.log(product);
    const {brand, battery, image, model, price, processor, ram, release_year, storage} = product
  return (
    <>
     <div className='card'>
        <h2>{brand}</h2>
        <h3>{model}</h3>
        <p>Processor {processor}</p>
        <p>Ram {ram}</p>
        <p>{storage}</p>
        <p>battery {battery} mah</p>
        <p>{release_year}</p>
        <h4>Price : {price}</h4>
        <img width={400} height={300} src={image} alt="" />
        <button>Add to cart</button>
     </div>
    </>
  )
}

export default Product