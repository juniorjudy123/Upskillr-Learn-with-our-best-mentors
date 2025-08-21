import React from "react"
import card2 from "../assets/card2_img.avif"
import card3 from "../assets/card3_img.avif"

const tutors = [
	{
		name: "Milena",
		rating: 4.9,
		type: "French tutor",
		languages: "Speaks French (Native), English (Advanced) +2",
	},
	{
		name: "Bassel",
		type: "French tutor",
		languages: "Speaks French (Native), English (Advanced) +2",
	},
	{
		name: "Sophia",
		type: "French tutor",
		languages: "Speaks French (Native), English (Advanced) +2",
	},
]

const stepBoxes = [
	{
		number: 1,
		color: "bg-green-400",
		title: "Find your tutor.",
		description:
			"We’ll connect you with a tutor who will motivate, challenge, and inspire you.",
		tutors,
	},
	{
		number: 2,
		color: "bg-yellow-400",
		title: "Start Learning.",
		description:
			"Your tutor will guide the way through your first lesson and help you plan your next steps.",
		tutors: [],
		image: card2,
	},
	{
		number: 3,
		color: "bg-pink-400",
		title: "Read. Write & Repeat.",
		description:
			"Choose how many lessons you want to take each week and get ready to reach your goals!",
		tutors: [],
		image: card3,
	},
]

const TutorStepCard = ({
	number,
	title,
	description,
	tutors,
	image,
	color,
}) => (
	<div className="max-w-md bg-white rounded-lg shadow-lg p-4 space-y-4 border mx-auto">
		<div>
			<h2
				className={`text-4xl font-bold mb-3 w-14 h-14 rounded-xl flex items-center justify-center text-white font-serif ${color}`}
			>
				{number}
			</h2>
			<h2 className="text-3xl font-bold mb-1 font-serif">{title}</h2>
			<p className="text-gray-600 text-base font-semibold">{description}</p>
		</div>

		{/* Only Card 1 will show stacked tutor cards */}
		{number === 1 && tutors && tutors.length > 0 && (
			<div className="relative h-40 mt-4">
				{tutors.map((tutor, idx) => (
					<div
						key={idx}
						className={`absolute top-0 left-0 
                  transform translate-x-[${idx * 20}px] 
                  z-[${10 - idx}] 
                  p-3 w-60 
                  border rounded-lg shadow-md bg-white`}
						style={{ top: `${idx * 20}px` }} // <-- add this style!
					>
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-semibold">{tutor.name}</h3>
							{tutor.rating && (
								<span className="bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full text-xs font-semibold flex items-center">
									⭐ {tutor.rating}
								</span>
							)}
						</div>
						<p className="text-pink-600 font-medium mt-1 text-sm">
							{tutor.type}
						</p>
						<p className="text-gray-600 mt-1 text-xs">{tutor.languages}</p>
					</div>
				))}
			</div>
		)}

		{/* Image below description for card 2 and 3 */}
		{image && (
			<img
				src={image}
				alt={`${title} illustration`}
				className="w-full h-50 object-cover rounded-2xl mt-6 p-2"
			/>
		)}
	</div>
)

const TutorStepsSection = () => {
	return (
		<section className="flex flex-col items-center py-20 bg-white px-4">
			<div className="w-full max-w-7xl mb-12">
				<h2 className="text-4xl font-extrabold tracking-wide">
					How Upskillr Works?
				</h2>
			</div>
			<div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-7">
				{stepBoxes.map((step) => (
					<TutorStepCard
						key={step.number}
						number={step.number}
						title={step.title}
						description={step.description}
						tutors={step.tutors}
						image={step.image}
						color={step.color}
					/>
				))}
			</div>
		</section>
	)
}

export default TutorStepsSection
