import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('cart'));		

var initialState = data ? data : [];

const cart = (state = initialState, action) => {
	var {product, quantity} = action;
	var index = -1;
	switch(action.type){
		case types.ADD_TO_CART :
		index = findProductInCart(state, product);
		if(index !== -1){
			state[index].quantity += quantity;
		} else {
			state.push({
				product,
				quantity
			})
		}
			localStorage.setItem('cart', JSON.stringify(state));	
			return [...state];

		case types.DELETE_PRODUCT_IN_CART :
			index = findProductInCart(state, product);
			if(index !== -1){
				state.splice(index, 1);
			}
			localStorage.setItem('cart', JSON.stringify(state));	
			return [...state];

		case types.UPDATE_PRODUCT_IN_CART :
			index = findProductInCart(state, product);
			if(index !== -1){
				state[index].quantity = quantity;	// = quantity là = action.quantity - là action gửi lên quantity đã cập nhật ở state render.
			}
			localStorage.setItem('cart', JSON.stringify(state));	
			return [...state];

		default : 
			return [...state];
	}
}

var findProductInCart = (cart, product) => {		// cart và product đang thêm
	var index = -1;
		if (cart.length > 0) {
			for(var i = 0; i < cart.length; i++) {
				if(cart[i].product.id === product.id){			// nếu sp trong giỏ .id === sp đang thêm.id
					index = i;
				}		
			}
		}
	return index;
}

// const cart = (state = initialState, action) => {
// 	var {product, quantity} = action;
// 	switch(action.type){
// 		case types.ADD_TO_CART :
// 			console.log(product.id);
// 			return [...state];
// 		default : 
// 			return [...state];
// 	}
// }

export default cart;
