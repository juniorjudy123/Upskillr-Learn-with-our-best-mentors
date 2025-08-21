import React, { useEffect, useState } from 'react';

import BannerComponent from "./components/BannerComponent"
import BottomBannerComponent from "./components/BottomBannerComponent"
import FooterComponent from "./components/FooterComponent"
import MovingBanner from "./components/MovingBannercomponent"
import ProfileCardComponent from "./components/ProfileCardComponent"
import StatsComponent from "./components/StatsComponent"
import WorkingComponent from "./components/WorkingComponent"

function App() {
	const [apiMessage, setApiMessage] = useState("");

	useEffect(() => {
		fetch("http://localhost:8000/api/test/")
  .then(res => res.json())
  .then(data => {
    console.log("Data from API:", data);
    setApiMessage(data.message);
  })
  .catch(err => console.error("Error fetching from Django:", err));

	}, []);

	return (
		<>
			<MovingBanner />
			<BannerComponent />

			{/* Displaying the message from Django */}
			<div style={{ textAlign: "center", margin: "20px", color: "#333" }}>
				<h3>Message from Django:</h3>
				<p>{apiMessage || "Loading..."}</p>
			</div>

			<StatsComponent />
			<WorkingComponent />
			<BottomBannerComponent />
			<FooterComponent />
		</>
	);
}

export default App;
