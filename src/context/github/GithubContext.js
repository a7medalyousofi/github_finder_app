import { createContext, useReducer } from "react";
import githubReduer from "./GithubReducers";

const GitHubContext = createContext();

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReduer, initialState);

	// Format number
	const numberFormater = (num, digits) => {
		const lookup = [
			{ value: 1, symbol: "" },
			{ value: 1e3, symbol: "k" },
			{ value: 1e6, symbol: "M" },
			{ value: 1e9, symbol: "G" },
			{ value: 1e12, symbol: "T" },
			{ value: 1e15, symbol: "P" },
			{ value: 1e18, symbol: "E" },
		];
		const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
		var item = lookup
			.slice()
			.reverse()
			.find(function (item) {
				return num >= item.value;
			});
		return item
			? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
			: "0";
	};

	return (
		<GitHubContext.Provider
			value={{
				...state,
				dispatch,
				numberFormater,
			}}>
			{children}
		</GitHubContext.Provider>
	);
};

export default GitHubContext;
