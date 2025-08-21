import React from "react"
import Marquee from "react-fast-marquee"

const MovingBanner = () => {
	return (
		<>
			<Marquee gradient={false} speed={40} className="bg-black text-white py-3">
				<span className="mx-20  text-lg">
					🚀 Learn faster with Upskillr!🌟 3000+ 5-star reviews! &nbsp;
				</span>

				<span className="mx-20 text-lg ">👨🏻‍🏫Expert tutors available 24/7!</span>
				<span className="mx-20 text-lg ">
					🎖️🎖️Exclusive Certifications in collaboration with IIT's
				</span>
			</Marquee>
		</>
	)
}

export default MovingBanner
