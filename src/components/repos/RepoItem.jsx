import { useContext } from 'react'
import { PropTypes } from "prop-types";
import { FiLink, FiEye, FiInfo, FiStar, FiGitBranch } from "react-icons/fi";
import GitHubContext from "../../context/github/GithubContext";
function RepoItem({ repo }) {
    const { numberFormater } = useContext(GitHubContext);
	const {
		name,
		description,
		html_url,
		forks,
		open_issues,
		watchers_count,
		stargazers_count,
	} = repo;

	return (
		<div className='p-4 grid auto-cols-auto md:flex-row rounded-lg shadow-md border border-primary_d_bg bg-secondary_d_bg text-secondary_d_text space-y-3 hover:shadow-lg hover:shadow-secondary_d_bg transition duration-150 ease-in-out'>
            {/* Repo name + link */}
            <a
                href={html_url}
                target='_blank'
                rel='noreferrer'
                className='flex items-center text-main_d_text text-lg rounded-lg transition duration-150 ease-in-out'>
                <FiLink className='text-xl mr-2' /> {name}
            </a>
            
            {/* Description */}
            <p className="text-secondary_d_text">{description ? description : "No Description."}</p>
            {/* Status */}
            <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:items-center'>
                <div className='flex items-center bg-sky-700/10 text-sky-700 rounded-lg'>
                    <div className='flex items-center py-1 px-[10px] border-r border-secondary_d_bg'>
                        <FiGitBranch className='sm:mr-2' />
                        <span className="hidden sm:flex font-medium">Forks</span>
                    </div>
                    <div className='py-1 px-[10px] font-medium'>
                        {numberFormater(forks, 1)}
                    </div>
                </div>
                <div className='flex items-center bg-green-700/10 text-green-700 rounded-lg'>
                    <div className='flex items-center py-1 px-[10px] border-r border-secondary_d_bg'>
                        <FiStar className='sm:mr-2' />
                        <span className="hidden sm:flex font-medium">Stars</span>
                    </div>
                    <div className='py-1 px-[10px] font-medium'>
                        {numberFormater(stargazers_count, 1)}
                    </div>
                </div>
                <div className='flex items-center bg-teal-700/10 text-teal-700 rounded-lg'>
                    <div className='flex items-center py-1 px-[10px] border-r border-secondary_d_bg'>
                        <FiEye className='sm:mr-2' />
                        <span className="hidden sm:flex font-medium">Watch</span>
                    </div>
                    <div className='py-1 px-[10px] font-medium'>
                        {numberFormater(watchers_count, 1)}
                    </div>
                </div>
                <div className='flex items-center bg-red-700/10 text-red-700 rounded-lg'>
                    <div className='flex items-center py-1 px-[10px] border-r border-secondary_d_bg'>
                        <FiInfo className='sm:mr-2' />
                        <span className="hidden sm:flex font-medium">Issues</span>
                    </div>
                    <div className='py-1 px-[10px] font-medium'>
                        {numberFormater(open_issues, 1)}
                    </div>
                </div>
            </div>
		</div>
	);
}

RepoItem.protoType = {
	repo: PropTypes.object.isReqquired,
};

export default RepoItem;
