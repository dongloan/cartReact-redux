import React, { Component } from 'react';
import Products from './../components/Products';
import {connect} from 'react-redux';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import {actAddToCart, changeMessage} from './../actions/index';

class ProductsContainer extends Component {

    render() {
        var {products} = this.props;
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        );
    }

    showProducts(products){
        var result = null;
        var {onAddToCart, onChangeMessage} = this.props;         //////////////////////// quan trọng //////////////////////
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} 
                product={product}  
                onAddToCart={ onAddToCart } 
                onChangeMessage={ onChangeMessage }
                />
            });
        }
        return result;
    }

}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(actAddToCart(product, 1))          // quantity ta truyền 1 luôn vì mỗi lần click là thếm 1 sp thôi
        },
        onChangeMessage : (message) => {
            dispatch(changeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
