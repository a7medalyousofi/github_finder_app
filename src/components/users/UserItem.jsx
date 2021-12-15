import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { FiExternalLink } from "react-icons/fi";

function UserItem({ user: { login, avatar_url } }) {
	return (
		<div className="max-h-20 flex bg-secondary_d_bg border border-primary_d_bg py-3 px-4 rounded-xl hover:shadow-lg hover:shadow-ternary_d_bg transition duration-150 ease-in-out">
			<div className='shrink-0 rounded-full border-2 border-secondary_d_text shadow-md shadow-secondary_d_bg h-14 w-14 min-h-14 min-w-14 overflow-hidden'>
				<img className='rounded-full h-full w-full' src={avatar_url} alt='' />
			</div>
            <div className="ml-5 flex flex-col justify-center items-start">
                <h2 className="font-bold mb-1 text-main_d_text">{ login }</h2>
                <Link to={`/user/${ login }`} className='flex items-center font-medium text-sm text-secondary_d_text'>Visit Profile<FiExternalLink className="ml-2" /></Link>
            </div>
		</div>
	);
}

UserItem.popTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
