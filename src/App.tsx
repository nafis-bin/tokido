import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TrendingCollection from './components/TrendingCollection'
import TopCreatorSection from './components/TopCreatorSection'
import BrowserCategories from './components/BrowserCategories'

function App() {
  return (
    <div className="bg-main">
      <Header />
      <Hero />
      <TrendingCollection />
      <TopCreatorSection />
      <BrowserCategories />
      <footer>

      </footer>
    </div>
  )
}

export default App
