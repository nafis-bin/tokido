import Header from '../components/Header'
import Hero from '../components/Hero'
import TrendingCollection from '../components/TrendingCollection'
import TopCreatorSection from '../components/TopCreatorSection'
import BrowserCategories from '../components/BrowserCategories'
import DiscoverSection from '../components/DiscoverSection'
import BillboardSection from '../components/BillboardSection'
import StepbyStep from '../components/StepbyStep'
import CallToActionSection from '../components/CallToActionSection'
import Footer from '../components/Footer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
	return (
		<div className="bg-main">
			<Header />
			<Hero />
			<TrendingCollection />
			<TopCreatorSection />
			<BrowserCategories />
			<DiscoverSection />
			<BillboardSection />
			<StepbyStep />
			<CallToActionSection />
			<Footer />
		</div>

	)
}
