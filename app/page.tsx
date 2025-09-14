import Hero from './components/Hero'
import AboutUs from './about/page'
import Services from './ser/page'
import Portfolio from './portfolio/page'
import Clients from './clients/page'
import Team from './team/page'
// import other sections as you build them

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <Clients />
      <Team />
      {/* Add Services, Portfolio, etc. */}
    </>
  )
}
