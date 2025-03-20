import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import WebApps from './pages/Projects/WebApps/WebApps'
import Social from './pages/Projects/Social/Social'
import Personal from './pages/Projects/Personal/Personal'
import Something from './pages/Projects/Something/Something'
import NotFound from './pages/util/NotFound'
import Kontakt from './pages/util/Kontakt'
import Impressum from './pages/util/Impressum'
import AppShell from './components/appshell/AppShell'
import { signal } from '@preact/signals-react'
import swapBackground from './components/BackgroundSwapper'



export const language = signal<string>('en')

function App() {

  return (
    <div className="App">
      <AppShell>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects/webapps" element={<WebApps />} />
          <Route path="/projects/social" element={<Social />} />
          <Route path="/projects/personal" element={<Personal />} />
          <Route path="/projects/something" element={<Something />} />
          <Route path="/contact" element={<Kontakt />} />
          <Route path="/imprint" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppShell>
    </div>
  )
}

export default App
