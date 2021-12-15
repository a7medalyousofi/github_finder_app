import { FiSearch } from "react-icons/fi";
import { useState, useContext } from "react";
import GitHubContext from "../../context/github/GithubContext";
import { searchUsers } from "../../context/github/GithubActions";
// import AlertContext from "../../context/alert/AlertContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserSearch() {
	const [text, setText] = useState("");

	const { users, dispatch } = useContext(GitHubContext);
	// const { setAlert } = useContext(AlertContext);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleClear = () => {
		toast.success("Cleared successfully", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			newestOnTop: false,
			rtl: false,
			theme: "colored",
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (text == "") {
			toast.error("Please enter github user name!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				newestOnTop: false,
				rtl: false,
				theme: "colored",
			});
			// setAlert("plz enter github user name", "error");
		} else {
			toast.success("User has been found", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				newestOnTop: false,
				rtl: false,
				theme: "colored",
			});

			dispatch({ type: "SET_LOADING" });
			const users = await searchUsers(text);
			dispatch({ type: "GET_USERS", payload: users });
			setText("");
		}
	};

	return (
		<div className='container mx-auto'>
			<div className='grid grid-cols-1 md:grid-cols-2 my-8 gap-y-4 md:gap-x-6'>
				<form onSubmit={handleSubmit}>
					<div className='relative rounded-md shadow-sm'>
						<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
							<span className='text-secondary_d_text sm:text-sm'>
								<FiSearch />
							</span>
						</div>
						<input
							onChange={handleChange}
							value={text}
							type='text'
							className='border-0 block w-full py-3 pl-8 pr-24 sm:text-sm text-secondary_d_text border-secondary_d_text rounded-md'
							placeholder='Type github user ...'
						/>
						<div className='absolute inset-y-0 right-0 m-1'>
							<button
								type='submit'
								className='h-full py-0 px-4 bg-primary_d_bg hover:bg-secondary_d_bg text-white font-semibold sm:text-sm rounded-md transition duration-150 ease-in-out'>
								Search
							</button>
						</div>
					</div>
				</form>
				{users.length > 0 && (
					<button
						onClick={() => dispatch({ type: "CLEAR_USERS" })}
						className='md:w-24 py-2 px-4 bg-white text-gray-700 font-semibold sm:text-sm rounded-md transition duration-150 ease-in-out'>
						Clear
					</button>
				)}
			</div>
			<ToastContainer />
		</div>
	);
}

export default UserSearch;
