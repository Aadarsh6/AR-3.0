import Hero from "./component/Hero"
import { useSmoothScroll } from "./lib/smoothScroll"

const App = () => {

  useSmoothScroll()
  return (
    <main className="relative">
      <Hero/>

        {/* Placeholder for other sections (we'll build these next) */}
      <div className="section-container">
        <div className="content-width text-center">
          <p className="text-subtle text-sm uppercase" style={{ letterSpacing: '0.05em' }}>
            More sections coming...
          </p>
        </div>
      </div>
    </main>
  )
}

export default App