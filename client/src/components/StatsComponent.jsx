import React from "react"

const StatsComponent = () => {
	const stats = [
		{ value: "1000+", label: "Experienced Mentors" },
		{ value: "3000+", label: "5-star reviews" },
		{ value: "200+", label: "Subjects taught" },
		{ value: "5+", label: "Nationalities" },
		{ value: "4.8 ⭐", label: "Rated on store" },
	]
	const languageTutors = [
		{ language: "🐍Python", count: "300 teachers" },
		{ language: "♨Java", count: "100 teachers" },
		{ language: "🌎Javascript", count: "300 teachers" },
		{ language: "🎨CSS", count: "50 teachers" },
		{ language: "♾️Devops", count: "10 teachers" },
		{ language: "Cloud🔥", count: "5,222 teachers" },
		{ language: "⚛️React", count: "500 teachers" },
		{ language: "🗣️Language mentors", count: "300 teachers" },
	]
	return (
		<div>
			<section className="flex justify-center items-center py-15 bg-white">
				<div className="max-w-7xl w-full px-6">
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-24  text-center">
						{stats.map((stat, index) => (
							<div key={index} className="flex flex-col items-center">
								<p className="text-4xl font-bold  text-indigo-600 font-serif">
									{stat.value}
								</p>
								<p className="text-gray-600 mt-2 text-sm font-bold font-serif">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="flex justify-center items-center py-5  bg-white">
				<div className="max-w-7xl w-full px-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
						{languageTutors.map((item, index) => (
							<div
								key={index}
								className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-300 cursor-pointer"
							>
								<div>
									<h3 className="text-3xl font-bold font-serif text-black">
										{item.language}
									</h3>
									<p className="text-gray-600 mt-1 text-sm font-serif">
										{item.count}
									</p>
								</div>
								{/* Arrow on right, vertically centered */}
								<span className="text-indigo-500 text-2xl select-none ml-1">
									→
								</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default StatsComponent
