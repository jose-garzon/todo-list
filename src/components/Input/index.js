import React from 'react';

import './style.css';

export const Input = ({
	name,
	label,
	type,
	placeholder,
	value,
	error,
	onChange,
}) => {
	return (
		<label className="Input" htmlFor={name} title={name}>
			<span className="Input__label">{label}</span>
			<input
				className="Input__box"
				name={name}
				id={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{error && <p className="error">{error}</p>}
		</label>
	);
};
