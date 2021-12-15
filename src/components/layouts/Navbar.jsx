import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
	return (
		<nav className='bg-ternary_d_bg text-main_d_text shadow-md shadow-gray-800/50'>
			<div className='container mx-auto flex justify-between p-4'>
				<div className='flex items-center'>
					<FiGithub className='text-2xl' />
					<Link
						to='/'
						className='ml-2 font-bold '>
						{title}
					</Link>
				</div>
				<div className='pages'>
					<Link
						to='/'
						className='rounded-md px-4 py-2 font-bold transition duration-300 ease-in-out hover:bg-secondary_d_bg hover:text-white'>
						Home
					</Link>
					<Link
						to='/about'
						className='rounded-md px-4 py-2 font-bold transition duration-300 ease-in-out hover:bg-secondary_d_bg hover:text-white'>
						About
					</Link>
                    
				</div>
			</div>
		</nav>
	);
}

Navbar.defaultProps = {
	title: "Github Finder",
};

Navbar.propTypes = {
	title: PropTypes.string,
};

export default Navbar;
