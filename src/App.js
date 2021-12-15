import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import "./index.css";

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<div className='h-full flex flex-col justify-between'>
						<Navbar />
						<main className='min-h-screen grid bg-main_d_bg p-4'>
							<Routes>
								<Route path='/' element={<Home />}></Route>
								<Route
									path='/about'
									element={<About />}></Route>
								<Route
									path='/user/:login'
									element={<User />}></Route>
								<Route
									path='/not-found'
									element={<NotFound />}></Route>
								<Route path='/*' element={<NotFound />}></Route>
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
