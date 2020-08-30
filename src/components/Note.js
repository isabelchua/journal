import React, { useContext } from 'react';
import NotesContext from '../context';

function Note({ note }) {
	const { dispatch } = useContext(NotesContext);

	return (
		<div className="note">
			<p>{note.text}</p>
			<div className="btn-containter">
				<button
					onClick={() =>
						dispatch({ type: 'SET_CURRENT_NOTE', payload: note })
					}
					className="edit"
				>
					Edit 2
				</button>
				<button className="delete">Delete</button>
			</div>
		</div>
	);
}

export default Note;
