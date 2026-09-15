import TechCard from './TechCard.jsx'
import Loader from './Loader.jsx'

export default function TechGrid({ technologies, loading, stackIds, onAdd }) {
  return (
    <div id="technologies" className="lg:col-span-2">
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={stackIds.has(tech.id)}
              onAdd={onAdd}
            />
          ))}
        </div>
      )}
    </div>
  )
}
