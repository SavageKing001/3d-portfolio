import React from 'react'
import { createRoot } from 'react-dom/client'
import ProjectsSection from './ProjectsSection'

const container = document.getElementById('projects-root')
if (container) {
  const root = createRoot(container)
  root.render(React.createElement(ProjectsSection))
  setTimeout(() => {
    const projectsEl = document.getElementById('projects')
    if (projectsEl && (window as any).__sectionObs__) {
      (window as any).__sectionObs__.observe(projectsEl)
    }
  }, 100)
}
