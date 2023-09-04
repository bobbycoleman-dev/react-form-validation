export const INITIAL_STATE = {
	firstName: {
		value: "",
		error: null
	},
	lastName: {
		value: "",
		error: null
	},
	email: {
		value: "",
		error: null
	}
};

const errorMessage = {
	firstName: "First Name must be at least 2 characters.",
	lastName: "Last Name must be at least 2 characters.",
	email: "Email must be at least 5 characters."
};

export const formReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_INPUT":
			return {
				...state,
				[action.payload.name]: { value: action.payload.value, error: null }
			};
		case "INPUT_ERROR":
			return {
				...state,
				[action.payload.name]: { value: action.payload.value, error: errorMessage.action.payload.name }
			};
		default:
			return INITIAL_STATE;
	}
};
