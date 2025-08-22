import React from "react"
import LogoComponent from "./LogoComponent"

const LoginLeftBanner = () => {
	return (
		<div className="w-1/2 bg-gray-400 flex flex-col justify-center items-center relative px-8 text-white">
			<div className="text-center space-y-2 max-w-2xl text-black">
				<h2 className="text-6xl black-text">Supercharge your career with</h2>
				<h4 className="text-2xl blue-text">Long Term Mentorship</h4>
				<p className="mb-4 text-lg text-gray-800">
					Land your dream job, role, and company faster than ever.
				</p>

				<button
					type="button"
					className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 -ml-16 mt-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Book a trial
					<svg
						className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</button>
			</div>

			{/* Text positioned at the top-left */}
			<div className="absolute top-10 left-5  m-4 flex  text-black">
				<LogoComponent />
			</div>
		</div>
	)
}

export default LoginLeftBanner
