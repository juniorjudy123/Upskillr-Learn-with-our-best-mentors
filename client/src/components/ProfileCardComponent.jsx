import React from "react"
import profile_pic from "../assets/profile_pic1.jpg"

const ProfileCardComponent = () => {
	return (
		<div className="m-2 max-w-xs bg-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
			<img
				src={profile_pic}
				alt="Mentor"
				className="w-full h-50 r p-4"
			/>

			<div className="p-4">
				<h2 className="text-xl font-semibold text-gray-800">Dr. Jane Doe</h2>
				<p className="text-sm text-gray-600 mt-1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					efficitur, sapien et varius finibus.
				</p>

				<div className="mt-3 text-blue-600 text-sm italic">#AI Mentor</div>
			</div>
		</div>
	)
}

export default ProfileCardComponent
