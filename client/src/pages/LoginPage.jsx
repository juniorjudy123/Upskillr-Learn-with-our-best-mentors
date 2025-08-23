import SignUpformComponent from "../components/SignUpformComponent"
import LoginLeftBanner from "../components/LoginLeftBanner"
import MentorDisplayComponent from "../components/MentorDisplayComponent"
import SignInformComponent from "../components/SignInformComponent"

function LoginPage() {
	return (
		<div className="flex h-screen">
			<LoginLeftBanner />
			{/* <SignUpformComponent /> */}
			{/* <MentorDisplayComponent /> */}
			<SignInformComponent />
		</div>
	)
}

export default LoginPage
