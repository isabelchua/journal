export default function reducer(state, action) {
	switch (action.type) {
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
