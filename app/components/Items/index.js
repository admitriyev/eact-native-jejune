/*
 *
 * Items
 *
 */

import { View, Text, TouchableHighlight, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

const data = [
	{
		key: '1',
		title: 'Summer Hat',
		description: 'Summer Cute Cotton Linen Striped Textured 3 Button Cadet Castro GI Cap Hat',
	},
	{
		key: '2',
		title: 'Philips Sonicare Toothbrush',
		description: 'Philips Sonicare HX6772/74 Healthy White Rechargeable Toothbrush',
	},
	{
		key: '3',
		title: 'Summer Hat',
		description: 'Summer Cute Cotton Linen Striped Textured 3 Button Cadet Castro GI Cap Hat',
	},
	{
		key: '4',
		title: 'Summer Hat',
		description: 'Summer Cute Cotton Linen Striped Textured 3 Button Cadet Castro GI Cap Hat',
	},
	{
		key: '5',
		title: 'Philips Sonicare Toothbrush',
		description: 'Philips Sonicare HX6772/74 Healthy White Rechargeable Toothbrush',
	},
	{
		key: '6',
		title: 'Summer Hat',
		description: 'Summer Cute Cotton Linen Striped Textured 3 Button Cadet Castro GI Cap Hat',
	},
	{
		key: '7',
		title: 'Summer Hat',
		description: 'Summer Cute Cotton Linen Striped Textured 3 Button Cadet Castro GI Cap Hat',
	},
	{
		key: '8',
		title: 'Summer Hat',
		description: 'Summer Cute Cotton Linen Striped Textured 3 Button Cadet Castro GI Cap Hat',
	},
	{
		key: '9',
		title: 'Summer Hat',
		description: 'Summer Cute Cotton Linen Striped Textured 3 Button Cadet Castro GI Cap Hat',
	},
	{
		key: '10',
		title: 'Philips Sonicare Toothbrush',
		description: 'Philips Sonicare HX6772/74 Healthy White Rechargeable Toothbrush',
	}
].map(d => Object.assign(d, {
	image: {uri: 'https://s3-us-west-2.amazonaws.com/admitriyev-icons/online-shop-3.png'}
}));

class Items extends Component {
	render() {
		const generateItem = (i) => (
			<View style={styles.cell} key={i.key}>
				<TouchableHighlight onPress={this.props.onSelectItem}>
					<View style={styles.row}>
						<Image source={i.image} style={styles.cellImage} />
						<View style={styles.textContainer}>
							<Text style={styles.title} numberOfLines={2}>
								{i.title}
							</Text>
							<Text numberOfLines={1}>
								{i.description}
							</Text>
						</View>
					</View>
				</TouchableHighlight>
			</View>
		);
		return (
			<ScrollView automaticallyAdjustContentInsets={false}>
				{data.map(generateItem)}
			</ScrollView>
		);
	}
}

Items.propTypes = {
	onSelectItem: React.PropTypes.func.isRequired
};

export default Items;
