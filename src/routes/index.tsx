import Hero from '../components/Hero'
import TrendingCollection from '../components/TrendingCollection'
import TopCreatorSection from '../components/TopCreatorSection'
import BrowserCategories from '../components/BrowserCategories'
import DiscoverSection from '../components/DiscoverSection'
import BillboardSection from '../components/BillboardSection'
import StepbyStep from '../components/StepbyStep'
import CallToActionSection from '../components/CallToActionSection'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
	return (
		<div className="bg-main">
			<Hero />
			<TrendingCollection />
			<TopCreatorSection />
			<BrowserCategories />
			<DiscoverSection />
			<BillboardSection />
			<StepbyStep />
			<CallToActionSection />
		</div>

	)
}
