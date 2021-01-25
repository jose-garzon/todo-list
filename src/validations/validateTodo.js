export const validateTodo = (values) => {
	const errors = {};

	if (!values.user) {
		errors.user = 'Campo obligatorio';
	}
	if (!values.task) {
		errors.task = 'Campo obligatorio';
	}
	if (!values.description) {
		errors.description = 'Campo obligatorio';
	}

	return errors;
};
