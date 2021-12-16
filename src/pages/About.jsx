function About() {
    return (
        <div className="h-full max-w-lg mx-auto flex flex-col md:justify-center text-gray-200 p-4">
            <h2 className="text-3xl font-bold mb-3">Github Finder</h2>
            <p className="mb-3">A React app to search Github profiles and see profile details, This project is a part of the <a className="text-blue-400 font-medium italic" href="http://www.udemy.com/course/modern-react-front-to-back" target="_blank" rel="noopener noreferrer">React Front to Back</a> Udemy course by <a className="text-blue-400 font-medium italic" href="http://traversymedia.com" target="_blank" rel="noopener noreferrer">Brad Traversy</a>.</p>
            <p className="text-gray-400">Version : <span className="text-gray-200 font-semibold">1.0</span></p>
            <p className="text-gray-400">Layout by : <span className="text-gray-200 font-semibold">Ahmed Al Yousofi</span></p>
        </div>
    )
}

export default About
