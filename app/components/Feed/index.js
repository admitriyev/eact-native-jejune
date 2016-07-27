/*
*
* Feed
*
*/

import { View, Platform, NavigationExperimental,
	TouchableHighlight, Image, ScrollView, Dimensions } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import Items from '../Items';
import ItemDetails from '../ItemDetails';
import { actions } from 'react-native-navigation-redux-helpers';

const {
  popRoute,
  pushRoute
} = actions;

const {
	Header: NavigationHeader,
	CardStack: NavigationCardStack
} = NavigationExperimental;
const NavigationHeaderBackButton = require('NavigationHeaderBackButton');

class Feed extends Component {
	render() {
		console.log("Feed props - " + JSON.stringify(this.props));
		return (
			<NavigationCardStack
				{...this.props}
				onNavigate={ () => {} }
				direction={'horizontal'}
				navigationState={this.props.navigation}
				renderScene={this._renderScene.bind(this)}
				renderOverlay={this._renderHeader.bind(this)}
				style={styles.main}
			/>
		);
	}

	_renderHeader(props) {
		const showHeader = props.scene.route.title &&
			(Platform.OS === 'ios' || props.scene.route.key === 'details');

		if (showHeader) {
			return (
				<NavigationHeader
				{...props}
				renderTitleComponent={this._renderTitleComponent.bind(this)}
				renderLeftComponent={this._renderLeftComponent.bind(this)}
				renderRightComponent={this._renderRightComponent.bind(this)}
				/>
			);
		}

		return null;
	}

	_renderTitleComponent(props) {
		return (
			<NavigationHeader.Title>
				{props.scene.route.title}
			</NavigationHeader.Title>
		);
	}

	_renderLeftComponent(props) {
		const { dispatch, navigation } = this.props;

		if (props.scene.route.showBackButton) {
			return (
				<NavigationHeaderBackButton onPress={() => dispatch(popRoute(navigation.key))} />
			);
		}

		return null;
	}

	_renderRightComponent(props) {
		if (props.scene.route.key === 'list') {
			return (
				<TouchableHighlight
					style={styles.buttonContainer}
					onPress={this._onAddItem.bind(this)}>
					<Image
						style={styles.button}
						source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
				</TouchableHighlight>
			);
		}

		return null;
	}

	_renderScene(props) {
		if (props.scene.route.key === 'list') {
			const marginTop = Platform.OS === 'ios' ? NavigationHeader.HEIGHT : 0;
			var {height, width} = Dimensions.get('window');
			console.log("_renderScene props - " + JSON.stringify(props));
			return (
				<View style={{ marginTop }}>
					<TouchableHighlight onPress={this._onPressEpisode.bind(this)}>
						<Image
							source={{uri: props.navigationState.episode}}
							style={[styles.episode, {height:height / 2}]} />
					</TouchableHighlight>
					<TouchableHighlight onPress={this._onPressProduct}>
						<Image
							source={{uri: props.navigationState.product}}
							style={[styles.product, {height:height / 2}]} />
					</TouchableHighlight>
				</View>
			);
		}

		if (props.scene.route.key === 'details') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<ItemDetails />
				</View>
			);
		}
	}

	_onAddItem() {
		const { dispatch } = this.props;

		dispatch(pushRoute({
			key: 'new',
			title: 'Main Screen',
			showBackButton: true
		}, 'global'));
	}

	_onSelectItem() {
		const { dispatch, navigation } = this.props;

		dispatch(pushRoute({
			key: 'details',
			title: 'Item details',
			showBackButton: true
		}, navigation.key));
	}

	_onPressEpisode() {
		console.log('_onPressEpisode props ' + JSON.stringify(this.props));
		const { dispatch } = this.props;
		dispatch({type: 'NEXT_EPISODE'})
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	console.log('mapStateToProps state - ' + JSON.stringify(state))
	return {
		navigation: state.get('feed'),
		episode: state.get('episodeReducer')
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
