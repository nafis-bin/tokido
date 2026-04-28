import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TrendingCollection from './components/TrendingCollection'
import TopCreatorSection from './components/TopCreatorSection'
import BrowserCategories from './components/BrowserCategories'
import DiscoverSection from './components/DiscoverSection'
import BillboardSection from './components/BillboardSection'

function App() {
  return (
    <div className="bg-main">
      <Header />
      <Hero />
      <TrendingCollection />
      <TopCreatorSection />
      <BrowserCategories />
      <DiscoverSection />
      <BillboardSection />
      <footer>

      </footer>
    </div>
  )
}

export default App
