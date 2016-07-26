import { cardStackReducer } from 'react-native-navigation-redux-helpers';

const initialState = {
	key: 'feed',
	index: 0,
	routes: [
		{
			key: 'list',
			title: 'Items',
			episode: 'https://s3-us-west-2.amazonaws.com/admitriyev-images/show-001.jpg',
			product: 'https://s3-us-west-2.amazonaws.com/admitriyev-images/product-001.jpg'
		},
	]
};

module.exports = cardStackReducer(initialState);
