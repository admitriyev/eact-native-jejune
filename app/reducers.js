import globalNavigation from './components/GlobalNavigation/reducer';
import tabs from './components/ApplicationTabs/reducer';
import feed  from './components/Feed/reducer';
import episodeReducer from './components/Feed/episodeReducer'
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
	globalNavigation: globalNavigation,
	tabs,
	feed,
	episodeReducer
};
export default function createReducer() {
	return combineReducers(applicationReducers);
}
