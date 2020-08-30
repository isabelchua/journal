import React, { useContext, useReducer } from 'react';
import './App.css';
import NotesContext from './context';
import notesReducer from './reducer';
import Nav from './components/Nav';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
//import Nav from './com'

function App() {
	const initialState = useContext(NotesContext);
	const [state, dispatch] = useReducer(notesReducer, initialState);
	return (
		<NotesContext.Provider value={{ state, dispatch }}>
			<Nav />
			<AddNote />
			<NoteList />
		</NotesContext.Provider>
	);
}

export default App;
