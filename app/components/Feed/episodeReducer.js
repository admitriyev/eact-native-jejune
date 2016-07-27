
const episodeState = {
	foo: 'bar'
};

export default function episodeReducer(state = episodeState, action) {
	console.log('episodeReducer state - ' + JSON.stringify(state) + ', action=' + action.type);
	if (action.type === 'NEXT_EPISODE') {
		newState = state;
		console.log('episodeReducer newState - ' + JSON.stringify(newState));
		return newState;
	}
  return state;
}
