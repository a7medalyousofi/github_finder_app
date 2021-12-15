import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
function NotFound() {
    return (
        <div className="h-full max-w-lg mx-auto flex flex-col items-center justify-center text-gray-200">
            <h2 className="text-6xl font-bold mb-6 text-yellow-500">Oops!</h2>
            <p className="text-xl mb-6">404 - Page not found!</p>
            <Link to='/' className="flex items-center bg-violet-600 text-white px-3 py-2 rounded-lg">
                <FiArrowLeft className='text-xl mr-2' /> Back To Home
            </Link>
        </div>
    )
}

export default NotFound
