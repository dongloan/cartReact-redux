var initialState = [
	{
		id : 1,
		name : 'Iphone X-MAX',
		image : 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png',
		description : 'Sản phẩm Iphone X-MAX',
		price : 1000,
		inventory : 10,
		rating : 3
	},
	{
		id : 2,
		name : 'Iphone 11',
		image : 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
		description : 'Sản phẩm Iphone 11',
		price : 900,
		inventory : 15,
		rating : 4
	},
	{
		id : 3,
		name : 'Iphone PRO MAX',
		image : 'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x460.png',
		description : 'Sản phẩm Iphone PRO MAX',
		price : 1400,
		inventory : 5,
		rating : 5
	}
];

const products = (state = initialState, action) => {
	switch(action.type){
		default : 
			return [...state];
	}
}

export default products;
