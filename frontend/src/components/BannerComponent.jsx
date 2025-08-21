import React from "react"
import logo from "../assets/help_logo.png"
import centerImage from "../assets/center_banner_img.avif"
import app_logo from "../assets/app_logo.png"
// import mii_logo from "../assets/mii_logo.png"

function BannerComponent() {
	return (
		<>
			{/* Pink Banner */}
			<div className="w-full bg-zinc-300 text-black pb-4 h-[600px]">
				{/* Navbar */}
				<nav className="flex items-center justify-between p-5 max-w-full">
					{/* Left Side */}
					<div className="flex items-center space-x-6">
						<img
							src={app_logo}
							alt="app_logo"
							className="w-11 h-11 mx-3 rounded-full shadow-lg shadow-pink-500/50 border-2 border-white transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,105,180,0.6)]
"
						/>
						{/* <div className="text-2xl font-bold ">Upskillr</div> */}

						<div className="text-3xl font-extrabold tracking-wide">
							<span className=" drop-shadow-md">Up</span>
							<span className="">skillr</span>
						</div>

						<ul className="flex space-x-6 mx-10">
							<li>
								<a
									href="/"
									className="hover:underline text-xl font-sans font-semibold"
								>
									Find Mentors
								</a>
							</li>
							<li>
								<a
									href="/about"
									className="hover:underline text-lg font-serif font-semibold"
								>
									Become a mentor
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="hover:underline text-lg font-semibold font-serif"
								>
									Proven progress
								</a>
							</li>
						</ul>
					</div>

					{/* Right Side */}
					<div className="flex items-center justify-center mx-6">
						{/* Language Dropdown */}
						<div className="relative group mx-12">
							<button className="flex items-center space-x-3 px-2 py-2 text-black rounded-md justify-center">
								<span>Language</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>
							<div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
								<div className="py-1">
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										English, INR
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Hindi, INR
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Malayalam, INR
									</a>
								</div>
							</div>
						</div>

						{/* Help logo and Login */}
						<div className="flex mx-3">
							<a href="/login" className="flex items-center justify-center">
								<img
									src={logo}
									alt="help_logo"
									className="w-5 h-5 mx-10 rounded-full shadow-md shadow-pink-500/50 border-2 border-white transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,105,180,0.6)]
"
								/>
							</a>

							<button
								type="button"
								class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
							>
								Login
							</button>
						</div>
					</div>
				</nav>

				{/* Hero Section */}
				<div className="relative flex justify-between items-center px-16 mx-28 mt-10 h-[450px]">
					{/* Text Section */}
					<div className="w-1/2 space-y-6 z-10">
						<h1 className="text-6xl font-bold text-gray-800 leading-tight p-2">
							<span className="block">Learn faster</span>
							<span className="block">with our</span>
							<span className="block  text-indigo-500">Top Mentors</span>

							<span className="block"></span>
						</h1>

						<div className="flex ">
							<button className="px-6 py-3 bg-black text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg text-lg">
								Get mentorship →
							</button>
						</div>
					</div>

					{/* Stacked Images */}
					<div className="relative w-1/2 flex justify-center items-center h-full ">
						<img
							src={centerImage}
							alt="third Banner"
							className="absolute w-[300px] top-28 right-105 rounded-sm shadow-md scale-90 z-0"
						/>
						<img
							src={centerImage}
							alt="second Banner"
							className="absolute w-[375px] top-24 right-120 rounded-sm shadow-lg scale-95 z-10"
						/>
						<img
							src={centerImage}
							alt="Center Banner"
							className="relative w-[450px] top-2 right-100 rounded-sm shadow-2xl z-20"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default BannerComponent
