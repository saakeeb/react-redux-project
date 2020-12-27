import React from 'react';

const Product = (props) => {
    const {product, addToCart} = props;
    return (
        <div style={{border:'1px solid cyan', borderRadius:'50%', margin:'10px 40%', padding:'20px'}}>
            <h4 title={product.id}>Product Name: {product.name}</h4>
            <button onClick={()=> addToCart(product.id, product.name)}>Add Product</button>
        </div>
    );
};

export default Product;