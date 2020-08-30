import React, { useContext, useState, useEffect, useRef } from 'react';
import NotesContext from '../context';

export default function EditNote() {
	const { state, dispatch } = useContext(NotesContext);
	const [value, setValue] = useState(state.currentNote.text);

	let ref = useRef();

	useEffect(() => {
		ref.current.focus();
	}, []);

	const handleChange = e => {
		setValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (value.trim() === '') {
			alert('Add note!');
		} else {
			dispatch({ type: 'UPDATE_NOTE', payload: value });
			setValue('');
		}
	};
	return (
		<div className="note-form">
			<form onSubmit={handleSubmit} action="">
				<textarea
					ref={ref}
					onChange={handleChange}
					value={value}
					name=""
					id=""
					cols="30"
					rows="20"
				/>
				<div style={{ textAlign: 'right' }}>
					<button>Update Note</button>
				</div>
			</form>
		</div>
	);
}
