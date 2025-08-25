import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import { BrowserRouter } from "react-router-dom"
import FooterComponent from "./components/FooterComponent"
import LoginFormComponent from "./components/LoginFormComponent"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
				<FooterComponent />
			</BrowserRouter>
		</>
	)
}

export default App
