import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechGrid from './components/TechGrid.jsx'
import YourStack from './components/YourStack.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])

  useEffect(() => {
    let cancelled = false

    async function loadTechnologies() {
      try {
        setLoading(true)
        const response = await fetch(`${import.meta.env.BASE_URL}data/technologies.json`)
        if (!response.ok) throw new Error('Failed to load technologies')
        const data = await response.json()
        if (!cancelled) setTechnologies(data)
      } catch (error) {
        if (!cancelled) toast.error('Could not load technology data.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadTechnologies()
    return () => {
      cancelled = true
    }
  }, [])

  const stackIds = new Set(stack.map((tech) => tech.id))

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  function handleRemove(tech) {
    setStack((prev) => prev.filter((item) => item.id !== tech.id))
    toast.info(`${tech.name} removed from your stack.`)
  }

  function handleRemoveAll() {
    if (stack.length === 0) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div className="min-h-screen bg-cloud">
      <Navbar />
      <Hero />

      <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-ink">
            Explore the <span className="brand-text">Technologies</span>
          </h2>
          <p className="mt-2 text-sm text-ink/50">
            Pick the technologies you want and build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <TechGrid
            technologies={technologies}
            loading={loading}
            stackIds={stackIds}
            onAdd={handleAdd}
          />
          <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </div>
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2500} newestOnTop />
    </div>
  )
}