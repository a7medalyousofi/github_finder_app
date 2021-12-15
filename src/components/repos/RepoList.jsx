import { PropTypes } from "prop-types";
import RepoItem from "./RepoItem";

function RepoList({ repos }) {
    
	return (
		<div className="space-y-6">
			<h2 className="mt-6 text-main_d_text text-2xl font-semibold">Latest Respositories</h2>
			{repos.map((repo) => {
				return (
					<RepoItem key={repo.id} repo={ repo }/>
				);
			})}
		</div>
	);
}
RepoList.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoList;
