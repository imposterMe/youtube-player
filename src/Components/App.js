import React from 'react';
import Youtube from './Youtube'
import { produce } from 'immer'
import { MainContext } from '../Context'
import { Reducer } from '../Reducer'

function useImmerReducer(reducer, initialState) {
    return React.useReducer(produce(reducer), initialState)
}


function App() {
	const [videos,dispatch] = useImmerReducer(Reducer, [])

	return (
		<MainContext.Provider value={{ videos, dispatch }}>
			<div className="container">
				<Youtube />
			</div>
		</MainContext.Provider>
	);
}

export default App;
