import React, { useContext, useReducer } from 'react';
import './App.css';
import NotesContext from './context';
import notesReducer from './reducer';

function App() {
	const initialState = useContext(NotesContext);
	const [state, dispatch] = useReducer(notesReducer, initialState);
	return (
		<NotesContext.Provider
			value={{ state, dispatch }}
		></NotesContext.Provider>
	);
}

export default App;
