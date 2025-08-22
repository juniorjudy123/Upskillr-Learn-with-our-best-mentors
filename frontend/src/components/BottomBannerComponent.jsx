import React from "react"

const BottomBannerComponent = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	return (
		<div className="relative w-full bg-zinc-300 text-black h-[300px] flex items-center justify-center">
			{/* Scroll to top button - top right */}
			<button
				onClick={scrollToTop}
				aria-label="Scroll to top"
				className="absolute right-8 top-4 p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M5 15l7-7 7 7"
					/>
				</svg>
			</button>

			<div className="text-center">
				<h2 className=" bottom_banner  mb-4">
					Lessons you’ll love.
					<span className="text-indigo-600  bottom_banner"> Guaranteed</span>
				</h2>

				<p className="text-lg font-medium">
					Try another Mentor for free if you’re not satisfied.
				</p>
			</div>
		</div>
	)
}

export default BottomBannerComponent
