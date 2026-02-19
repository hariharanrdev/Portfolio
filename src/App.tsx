import { ThemeProvider } from './context/ThemeContext';
import { ScrollLayout } from './components/layout/ScrollLayout';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { CTA } from './components/sections/CTA';
import { Resume } from './components/sections/Resume';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <ScrollLayout>
        <Hero />
        <About />
        <CTA />
        <Resume />
        <Projects />
        <Skills />
        <Contact />
      </ScrollLayout>
    </ThemeProvider>
  );
}

export default App;
