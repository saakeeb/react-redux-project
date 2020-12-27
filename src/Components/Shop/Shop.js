import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Redux/Actions/CartActions';

const Shop = (props) => {
    console.log(props);
    const { cart, removeFromCart } = props;

    return (
        <div>
            <h2>This is shop</h2>
            {
                cart.length > 0 ?
                    <ul style={{ border: '1px solid lime', margin: '10px 30%' }}>
                        {
                            cart.map(pd =>
                                <li key={pd.cartId} title={pd.cartId}> {pd.name}
                                    <button onClick={() => removeFromCart(pd.cartId)} style={{ margin: '1% 5%' }}> Remove </button>
                                </li>)
                        }
                    </ul> : ''
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Shop);