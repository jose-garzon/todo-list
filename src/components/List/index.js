import React from 'react';

import { ListItem } from '../ListItem';
import './style.css';

export const List = ({ todos }) => {
	return (
		<section className="List">
			<h1 className="List__title">Lista de tareas</h1>
			<ul className="List__elements">
				{todos.map((todo, i) => (
					<ListItem key={i} {...todo} />
				))}
			</ul>
		</section>
	);
};
