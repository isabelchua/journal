import nanoid from 'nanoid';

export default function reducer(state, action) {
	switch (action.type) {
		case 'ADD_NOTE':
			const newNote = {
				id: nanoid(),
				text: action.payload
			};
			const addedNotes = [...state.notes, newNote];
			return {
				...state,
				notes: addedNotes
			};
		case 'SET_CURRENT_NOTE':
			return {
				...state,
				currentNote: action.payload
			};
		case 'DELETE_NOTE':
			const deletedNotes = state.notes.filter(
				note => note.id !== action.payload
			);
			return {
				...state,
				notes: deletedNotes
			};
		default:
			return state;
	}
}
