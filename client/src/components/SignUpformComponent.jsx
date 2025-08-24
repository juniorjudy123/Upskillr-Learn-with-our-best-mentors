import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

const SignUpformComponent = () => {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const navigate = useNavigate() // To handle programmatic navigation

	const handleSubmit = async (e) => {
		e.preventDefault()

		const UserData = {
			username,
			email,
			password,
		}

		try {
			const response = await axios.post(
				"http://localhost:8000/api/v1/register/",
				UserData
			)
			console.log("response", response.data)
			console.log("Sign up successful")
		} catch (error) {
			console.log("registeration error", error.response.data)
		}
	}
	return (
		<div className="w-2/3 bg-white flex justify-center items-center">
			<div className="w-full max-w-md p-8 relative">
				{/* Back Arrow */}
				<div className="absolute top-3 left-3">
					<button
						onClick={() => navigate(-1)} // Go back to the previous page
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

				<h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
					Sign Up
				</h2>
				<p className="text-center text-lg mb-6 text-gray-600">
					Sign up to meet the right mentor for you.
				</p>

				{/* Registration Form */}

				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Name */}
					<div>
						<input
							type="text"
							id="name"
							name="name"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
							required
							className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					<div>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					{/* Password */}
					<div>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							placeholder="password"
							onChange={(e) => setPassword(e.target.value)}
							required
							className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					{/* Confirm Password
					<div>
						<label
							htmlFor="confirmPassword"
							className="block text-lg font-medium text-gray-700"
						>
							Confirm password
						</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							value={formData.confirmPassword}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div> */}

					{/* Remember me checkbox
					<div className="flex items-center space-x-2">
						<input
							type="checkbox"
							id="rememberMe"
							name="rememberMe"
							checked={formData.rememberMe}
							onChange={handleChange}
							className="h-5 w-5"
						/>
						<label htmlFor="rememberMe" className="text-sm text-gray-700">
							Remember me
						</label>
					</div> */}

					{/* Sign Up Button */}
					<button
						type="submit"
						className="w-full py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
						Sign Up
					</button>
				</form>

				{/* Login Link */}
				<div className="text-center mt-4">
					<p className="text-sm text-gray-600">
						Already have an account?{" "}
						<Link
							to="/login"
							className="text-indigo-600 hover:underline font-semibold"
						>
							Log in
						</Link>
					</p>
				</div>

				{/* Terms and Privacy */}
				<div className="text-center mt-4 text-sm text-gray-600">
					<p>
						By clicking Continue or Sign up, you agree to our{" "}
						<a href="/terms" className="text-indigo-600 hover:underline">
							Terms of Use
						</a>
						, including{" "}
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

export default SignUpformComponent
