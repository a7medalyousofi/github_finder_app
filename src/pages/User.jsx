import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import GitHubContext from "../context/github/GithubContext";
import Skelton from "./../components/layouts/Skelton";
import RepoList from "../components/repos/RepoList";
import { getUserAndRepos } from "../context/github/GithubActions";
import {
	FiArrowLeft,
	FiExternalLink,
	FiMapPin,
	FiGlobe,
	FiTwitter,
	FiUsers,
	FiUser,
	FiColumns,
	FiArchive,
} from "react-icons/fi";

function User() {
	const { user, loading, repos, dispatch, numberFormater } =
		useContext(GitHubContext);
	const params = useParams();

	useEffect(() => {
		dispatch({ type: 'SET_LOADING' })
		const getUserData = async () => {
			const userData = await getUserAndRepos(params.login)
			dispatch({type: 'GET_USER_AND_REPOS', payload: userData })

		}
		getUserData()
	}, [dispatch, params.login]);

	const {
		name,
		type,
		avatar_url,
		location,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	if (loading) {
		return <Skelton />;
	}

	return (
		<>
			<div className='w-full container mx-auto p-4'>
				{/* Back to search buttono */}
				<div className='mb-4 inline-block'>
					<Link
						to='/'
						className='flex items-center bg-blue-600 hover:bg-blue-500 text-main_d_text px-3 py-2 rounded-lg transition duration-150 ease-in-out'>
						<FiArrowLeft className='text-xl mr-2' /> Back To Search
					</Link>
				</div>

				{/* Avatar + Info */}
				<div className='grid grid-col-1 md:grid-cols-4 mb-8 md:gap-8'>
					{/* avatar_url + name + login */}
					<div className='mb-6 md:mb-0 '>
						<div className='relative rounded-lg shadow-xl overflow-hidden'>
							<figure className=''>
								<img
									className='rounded-lg w-full'
									src={avatar_url}
									alt=''
								/>
							</figure>
							<div className='absolute bottom-0 left-0 w-full py-2 px-4 bg-gradient-to-t from-primary_d_bg flex justify-between'>
								<h2 className='text-white font-medium'>
									{name}
								</h2>
								<h2 className='text-primary_d_text'>
									@{login}
								</h2>
							</div>
						</div>
					</div>
					{/* name + type + hireable */}
					<div className='md:col-span-3'>
						<div className=''>
							<div className='flex flex-col md:flex-row  md:items-center'>
								<h1 className='text-3xl text-main_d_text font-bold'>
									{name}
								</h1>
								<div className='flex space-x-2 md:space-x-0'>
									<div className='md:ml-4 md:mr-2 rounded-md px-2 bg-green-200/20 text-green-500 text-sm font-medium'>
										{type}
									</div>
									{hireable && (
										<div className='md:mx-1 rounded-md px-2 bg-blue-200/20 text-blue-600 text-sm font-medium'>
											Hireable
										</div>
									)}
								</div>
							</div>
						</div>

						<h2 className='text-primary_d_text mb-5'>@{login}</h2>

						<p className='text-lg text-secondary_d_text'>{(bio) ? bio : 'Hi there, welcome to my profile.'}</p>

						<button className='my-5'>
							<a
								className='flex items-center px-4 py-2 border border-primary_d_bg hover:bg-blue-600 hover:text-main_d_text hover:border-blue-600 text-secondary_d_text transition duration-150 ease-in-out rounded-lg'
								href={html_url}
								target='_blank'
								rel='noreferrer'>
								Visit Github Profile
								<FiExternalLink className='ml-2' />
							</a>
						</button>

						<div className='w-full grid grid-cols-1 md:grid-cols-3 gap-y-3 rounded-lg shadow-md text-primary_d_text bg-secondary_d_bg border border-primary_d_bg'>
							{location && (
								<div className='py-2 px-4 flex items-center'>
									<FiMapPin className='text-3xl mr-3' />
									<div className='stat'>
										<div className='text-md'>Location</div>
										<div className='text-lg text-main_d_text font-medium'>
											{location}
										</div>
									</div>
								</div>
							)}
							{blog && (
								<div
									className={`${
										location
											? "py-2 px-4 md:border-l md:border-primary_d_bg"
											: ""
									} flex items-center`}>
									<FiGlobe className='text-3xl mr-3' />
									<div className='stat'>
										<div className='text-md'>Website</div>
										<a
											href={`https://${blog}`}
											target='_blank'
											rel='noreferrer'
											className='text-lg text-main_d_text font-medium'>
											{blog}
										</a>
									</div>
								</div>
							)}
							{twitter_username && (
								<div
									className={`${
										location || blog
											? "py-2 px-4 md:border-l md:border-primary_d_bg"
											: ""
									} flex items-center`}>
									<FiTwitter className='text-3xl mr-3' />
									<div className='stat'>
										<div className='text-md'>Twitter</div>
										<a
											href={`https://twitter.com/${twitter_username}`}
											target='_blank'
											rel='noreferrer'
											className='text-lg text-main_d_text font-medium'>
											{twitter_username}
										</a>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Status Info */}
				<div className='w-full grid grid-cols-1 md:grid-cols-4 gap-y-3 rounded-lg shadow-md border border-primary_d_bg bg-secondary_d_bg text-secondary_d_text'>
					{/* Followers */}
					<div className='p-4 flex items-center justify-between'>
						<div>
							<div className='text-md'>Followers</div>
							<div className='text-lg text-main_d_text font-medium'>
								{numberFormater(followers, 2)}
							</div>
						</div>
						<FiUsers className='text-sky-600 text-3xl ml-3' />
					</div>
					{/* Following */}
					<div className='p-4 flex items-center justify-between border-t md:border-t-0 md:border-l border-primary_d_bg'>
						<div>
							<div className='text-md'>Following</div>
							<div className='text-lg text-main_d_text font-medium'>
								{following}
							</div>
						</div>
						<FiUser className='text-sky-600 text-3xl ml-3' />
					</div>
					{/* Public Repos */}
					<div className='p-4 flex items-center justify-between border-t md:border-t-0 md:border-l border-primary_d_bg'>
						<div>
							<div className='text-md'>Public Repos</div>
							<div className='text-lg text-main_d_text font-medium'>
								{public_repos}
							</div>
						</div>
						<FiColumns className='text-sky-600 text-3xl ml-3' />
					</div>
					{/* Public Gists */}
					<div className='p-4 flex items-center justify-between border-t md:border-t-0 md:border-l border-primary_d_bg'>
						<div>
							<div className='text-md'>Public Gists</div>
							<div className='text-lg text-main_d_text font-medium'>
								{public_gists}
							</div>
						</div>
						<FiArchive className='text-sky-600 text-3xl ml-3' />
					</div>
				</div>
				{/* Repo List Component*/}
				<RepoList repos={repos} />
			</div>
		</>
	);
}

export default User;
