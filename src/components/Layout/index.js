import React, { useState } from 'react';

import { Form } from '../Form';
import { List } from '../List';

import './style.css';

export const Layout = () => {
	const [todos, setTodos] = useState([]);

	const createTodo = (todo) => {
		setTodos([...todos, todo]);
	};

	return (
		<main className="Layout">
			<Form createTodo={createTodo} />
			<List todos={todos} />
		</main>
	);
};
