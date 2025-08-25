import MovingBanner from "../components/MovingBannercomponent"
import BannerComponent from "../components/BannerComponent"
import StatsComponent from "../components/StatsComponent"
import BottomBannerComponent from "../components/BottomBannerComponent"
import FooterComponent from "../components/FooterComponent"
import WorkingComponent from "../components/WorkingComponent"

const HomePage = () => {
	return (
		<div>
			<MovingBanner />
			<BannerComponent />
			<StatsComponent />
			<WorkingComponent />
			<BottomBannerComponent />
			<FooterComponent />
		</div>
	)
}

export default HomePage
