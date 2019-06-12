import React, { useReducer, useContext } from 'react';
import Youtube from './Youtube'
import MainContext from '../Context'
import Reducer from '../Reducer'


function App() {

	const initialState = useContext(MainContext);
	const [state, dispatch] = useReducer(Reducer, initialState)

	return (
		<MainContext.Provider value={{ state, dispatch }}>
		  	<Youtube />
		</MainContext.Provider>
	);
}

export default App;
