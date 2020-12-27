import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addToCart } from '../Redux/Actions/CartActions';

const Cart = (props) => {
    console.log(props);
    const {products, addToCart} = props;
    return (
        <div>
            <h3>This is cart</h3>
            {
                products.map(pd => 
                <Product 
                key = {pd.id}
                addToCart={addToCart}
                product={pd}>

                </Product>)
            }
        </div>
    );
};

const mapStateToProps = state =>{
    return{ 
        cart: state.cart,
        products: state.products
    }
}
const mapDispatchToProps= {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);