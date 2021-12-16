import { useContext } from 'react'
import GitHubContext from '../../context/github/GithubContext';
import Skelton from './../layouts/Skelton';
import UserItem from './../users/UserItem';

function UsersData() {
    const { users, loading  } = useContext(GitHubContext)

    if(!loading) {
        return (
            <div className='container mx-auto grid grid-cols-1 gap-4 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 text-gray-400 p-4'>
                {users.map((user) => (
                    <UserItem user={user} key={ user.id }/>
                ))}
            </div>
        )
    } else {
        return <Skelton className='container mx-auto' />
    }
}

export default UsersData
