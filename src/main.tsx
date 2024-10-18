import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.tsx'
import Home from "./Home.tsx"
import About from "./About.tsx"
import Projects from "./Projects.tsx"
import Contact from "./Contact.tsx"
createRoot(document.getElementById('root')!).render(//Aqui é tudo de acordo com React
  <StrictMode>
    <Header />
    <Home />
    <About />
    <Projects />
    <Contact />
  </StrictMode>,
)
