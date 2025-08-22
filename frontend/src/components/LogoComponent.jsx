import React from "react"
import app_logo from "../assets/app_logo.png"

const LogoComponent = () => {
	return (
		<>
			<img
				src={app_logo}
				alt="app_logo"
				className="w-11 h-11 mx-3 rounded-full shadow-lg shadow-pink-500/50 border-2 border-white transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,105,180,0.6)]
"
			/>

			<div className="text-3xl font-extrabold tracking-wide ">
				<span className=" drop-shadow-md">Up</span>
				<span className="text-indigo-600">skillr</span>
			</div>
		</>
	)
}

export default LogoComponent
