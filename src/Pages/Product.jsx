import React from 'react'
import Product_Item from '../components/Product_Item'

const Product = () => {
  return (
    <div>Product
        <Product_Item p_name='S23' p_price='50,000' p_qty='12' p_desc='8GB,128GB'  />
        
        <hr/>
        <Product_Item p_name='S24' p_price='70,000' p_qty='6' p_desc='8GB,128GB' />
        <hr/>
        <Product_Item p_name='S24 ULTRA' p_price='90,000' p_qty='3' p_desc='8GB,256GB' />
        

    </div>
  )
}

export default Product