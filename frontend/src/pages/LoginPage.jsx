import SignUpformComponent from "../components/SignUpformComponent"
import LoginLeftBanner from "../components/LoginLeftBanner"

function LoginPage() {
	return (
		<div className="flex h-screen">
			<LoginLeftBanner />
			<SignUpformComponent />
		</div>
	)
}

export default LoginPage
