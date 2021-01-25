import { useState } from 'react';

export const useForm = (validation, createTodo) => {
	const [values, setValues] = useState({ user: '', task: '', description: '' });
	const [error, setError] = useState({});

	const handleInputChage = ({ target: { name, value } }) => {
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let err = validation(values);
		setError(err);
		if (Object.keys(err).length === 0) {
			createTodo(values);
		}
	};

	return { values, error, handleInputChage, handleSubmit };
};
