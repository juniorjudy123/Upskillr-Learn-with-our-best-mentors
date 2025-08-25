import SignUpformComponent from "../components/SignUpformComponent"
import LoginLeftBanner from "../components/LoginLeftBanner"
import MentorDisplayComponent from "../components/MentorDisplayComponent"
import SignInformComponent from "../components/LoginFormComponent"
import LoginFormComponent from "../components/LoginFormComponent"
import { useState } from "react"

function LoginPage() {
	const [showSignup, setShowSignup] = useState(false)
	return (
		<div className="flex h-screen">
			<LoginLeftBanner />
			{/* Conditionally render form */}
			{showSignup ? (
				<SignUpformComponent onSwitch={() => setShowSignup(false)} />
			) : (
				<LoginFormComponent onSwitch={() => setShowSignup(true)} />
			)}
		</div>
	)
}

export default LoginPage
