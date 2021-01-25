import React from 'react';

import { Input } from '../Input';
import { useForm } from '../../hooks/useForm';
import { validateTodo } from '../../validations/validateTodo';
import './style.css';

export const Form = ({ createTodo }) => {
	const { values, error, handleInputChage, handleSubmit } = useForm(
		validateTodo,
		createTodo
	);

	return (
		<form onSubmit={handleSubmit} className="Form">
			<h1 className="Form__title">Crea una tarea</h1>
			<Input
				name="user"
				type="text"
				placeholder="Encargado"
				label="Quien va a realizar la tarea"
				value={values.name}
				onChange={handleInputChage}
				error={error.user}
			/>
			<Input
				name="task"
				type="text"
				placeholder="Tarea"
				label="Cual es la tarea"
				value={values.task}
				onChange={handleInputChage}
				error={error.task}
			/>
			<Input
				name="description"
				type="text"
				placeholder="descripción"
				label="Detalla la tarea"
				value={values.description}
				onChange={handleInputChage}
				error={error.description}
			/>
			<button className="Form__button" type="submit">
				Crear tarea
			</button>
		</form>
	);
};
