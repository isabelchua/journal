import React, { useState, useContext, useRef, useEffect } from 'react';
import NotesContext from '../context';

function AddNote() {
	const { dispatch } = useContext(NotesContext);
	const [value, setValue] = useState('');

	let ref = useRef();

	//focus on task bar
	useEffect(() => {
		ref.current.focus();
	}, []);

	const handleChange = e => {
		setValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		//remove white spaces
		if (value.trim() === '') {
			alert('Add note!');
		} else {
			dispatch({ type: 'ADD_NOTE', payload: value });
			setValue('');
		}
	};

	return (
		<div className="note-form">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					ref={ref}
					onChange={handleChange}
					value={value}
				/>
				<button>add</button>
			</form>
		</div>
	);
}

export default AddNote;
