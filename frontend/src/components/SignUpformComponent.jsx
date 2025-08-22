import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const SignUpformComponent = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		rememberMe: false,
	})

	const navigate = useNavigate() // To handle programmatic navigation

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: type === "checkbox" ? checked : value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// Check if password and confirmPassword match
		if (formData.password !== formData.confirmPassword) {
			alert("Passwords do not match!")
			return
		}

		// Send registration data to backend
		fetch("http://localhost:8000/api/register/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: formData.name,
				email: formData.email,
				password: formData.password,
				confirm_password: formData.confirmPassword, // Or use another key for confirm password if required
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.message === "User registered successfully") {
					// On success, redirect to login page
					navigate("/login")
				} else {
					alert("Error: " + data.message) // Show error message if registration fails
				}
			})
			.catch((error) => {
				console.error("Error during registration:", error)
				alert("An error occurred. Please try again.")
			})
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

				<h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
					Sign Up
				</h2>
				<p className="text-center text-lg mb-6 text-gray-600">
					Sign up to meet the best English tutors for you.
				</p>

				{/* Registration Form */}
				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Name */}
					<div>
						<label
							htmlFor="name"
							className="block text-lg font-medium text-gray-700"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					{/* Email */}
					<div>
						<label
							htmlFor="email"
							className="block text-lg font-medium text-gray-700"
						>
							Your email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					{/* Password */}
					<div>
						<label
							htmlFor="password"
							className="block text-lg font-medium text-gray-700"
						>
							Your password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					{/* Confirm Password */}
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
					</div>

					{/* Remember me checkbox */}
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
					</div>

					{/* Sign Up Button */}
					<button
						type="submit"
						className="w-full py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
						Continue or Sign up
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
