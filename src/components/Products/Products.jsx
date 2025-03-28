import React, { use } from 'react'
import Product from '../Product/Product';

const Products = ({ productsPromise, }) => {

    const productData = use(productsPromise)
    
  return( 
  
  <>
    <div>

     {
        productData.map(product=><Product key={product.id} product={product}/>)
     }

    </div>
  </>
  
)
};

export default Products