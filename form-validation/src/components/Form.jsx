import { useReducer } from "react";
import { formReducer, INITIAL_STATE } from "../formReducer";

const Form = () => {
	const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

	const handleChange = (e) => {
		dispatch(
			{
				type: "CHANGE_INPUT",
				payload: { name: e.target.name, value: e.target.value }
			},
			{
				type: "INPUT_ERROR",
				payload: { name: e.target.name, value: e.target.value }
			}
		);
	};

	return (
		<div className="w-96 mx-auto">
			{JSON.stringify(state)}
			<form className="space-y-8">
				<div>
					<label htmlFor="firstName" className="block">
						First Name:
					</label>
					<input
						type="text"
						name="firstName"
						className="p-2 border w-full bg-slate-100 rounded"
						onChange={handleChange}
					/>
					{state.firstName.error ? <p className="text-red-500">{state.firstName.error}</p> : ""}
				</div>
				<div>
					<label htmlFor="lastName" className="block">
						Last Name:
					</label>
					<input
						type="text"
						name="lastName"
						className="p-2 border w-full bg-slate-100 rounded"
						onChange={handleChange}
					/>
					{state.lastName.error ? <p className="text-red-500">{state.lastName.error}</p> : ""}
				</div>
				<div>
					<label htmlFor="email" className="block">
						Email:
					</label>
					<input
						type="text"
						name="email"
						className="p-2 border w-full bg-slate-100 rounded"
						onChange={handleChange}
					/>
					{state.email.error ? <p className="text-red-500">{state.email.error}</p> : ""}
				</div>
				<div>
					<button className="bg-green-500 rounded shadow-lg px-6 py-2 hover:bg-green-700 active:bg-blue-500 transition-colors duration-200">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
