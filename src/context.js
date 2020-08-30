import React from 'react';

const NotesContext = React.createContext({
	currentNote: null,
	notes: [
		{ id: 1, text: 'Study' },
		{ id: 2, text: 'Clean room' },
		{ id: 3, text: 'EAT' }
	]
});

export default NotesContext;
