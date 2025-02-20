import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import ProjectsPage from './pages/ProjectsPage'
import WebApps from './pages/Projects/WebApps/WebApps'
import Social from './pages/Projects/Social/Social'
import Personal from './pages/Projects/Personal/Personal'
import Something from './pages/Projects/Something/Something'
import NotFound from './pages/util/NotFound'
import Kontakt from './pages/util/Kontakt'
import Impressum from './pages/util/Impressum'
import AppShell from './components/appshell/AppShell'
import { signal } from '@preact/signals-react'



export const language = signal<string>('en')

function App() {


  return (
    <div className="App">
      <AppShell>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projekte" element={<ProjectsPage />} />
          <Route path="/projekte/webapps" element={<WebApps />} />
          <Route path="/projekte/social" element={<Social />} />
          <Route path="/projekte/personal" element={<Personal />} />
          <Route path="/projekte/something" element={<Something />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppShell>
    </div>
  )
}

export default App
