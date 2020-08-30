import React from 'react';

function Note({ note }) {
	return (
		<div className="note">
			<p>{note.text}</p>
			<div className="btn-containter">
				<div className="edit">Edit</div>
				<div className="delete">Delete</div>
			</div>
		</div>
	);
}

export default Note;
