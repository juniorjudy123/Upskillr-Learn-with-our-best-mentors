import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

const LoginFormComponent = ({ onSwitch }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [message, setMessage] = useState("")
	const [error, setError] = useState("")

	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const credentials = { email, password }

		try {
			const response = await axios.post(
				"http://localhost:8000/api/v1/login/",
				credentials
			)

			console.log("Login response:", response.data)

			// You might want to store a token in localStorage/cookies here
			// localStorage.setItem("token", response.data.token)

			setMessage("Login successful!")
			setError("")

			setEmail("")
			setPassword("")

			// setTimeout(() => {
			// 	navigate("/login") // Redirect to a protected page
			// }, 2000)
		} catch (error) {
			console.error("Login error", error.response?.data || error.message)
			setError(
				error.response?.data?.detail ||
					"Login failed. Please check your credentials."
			)
			setMessage("")
		}
	}

	return (
		<div className="w-full min-h-screen bg-white flex justify-center items-center px-6">
			<div className="w-full max-w-xl bg-white border border-gray-200 rounded-xl shadow-xl p-16 relative">
				{/* Back Arrow */}
				<div className="absolute top-3 left-3">
					<button
						onClick={() => navigate(-1)}
						className="text-black hover:text-indigo-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
				</div>

				{/* Success Message */}
				{message && (
					<div className="text-green-600 text-center font-bold text-xl mb-4">
						✅ {message}
					</div>
				)}

				{/* Error Message */}
				{error && (
					<div className="text-red-600 text-center font-bold text-xl mb-4">
						❌ {error}
					</div>
				)}

				<h2 className="text-3xl text-center mb-6 text-gray-800">Log in</h2>
				<p className="text-center text-lg mb-6 text-gray-800">
					Welcome back! Please log in to continue.
				</p>

				{/* Login Form */}
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							required
							className="w-full px-5 py-2 mt-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					<div>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							required
							className="w-full px-5 py-2 mt-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
						Log In
					</button>
				</form>

				{/* Sign up link */}
				<p className="text-sm text-gray-600">
					Don't have an account?{" "}
					<button
						onClick={onSwitch}
						className="text-indigo-600 hover:underline font-semibold"
					>
						Sign up
					</button>
				</p>

				{/* Terms and Privacy */}
				<div className="text-center mt-4 text-sm text-gray-600">
					<p>
						By logging in, you agree to our{" "}
						<a href="/terms" className="text-indigo-600 hover:underline">
							Terms of Use
						</a>{" "}
						and{" "}
						<a href="/privacy" className="text-indigo-600 hover:underline">
							Privacy Policy
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	)
}

export default LoginFormComponent
