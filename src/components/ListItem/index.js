import React, { useState } from 'react';

import { Modal } from '../Modal';
import './style.css';

export const ListItem = ({ user, task, description }) => {
	const [isOpen, setIsOpen] = useState(false);
	const openCloseModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<li className="List-item" onClick={openCloseModal}>
				<h2 className="List-item__name">{user}</h2>
				<p>{task}</p>
			</li>
			<Modal
				isOpen={isOpen}
				openCloseModal={openCloseModal}
				user={user}
				task={task}
				description={description}
			/>
		</>
	);
};
