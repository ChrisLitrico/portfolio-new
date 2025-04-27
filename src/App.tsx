import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import About from './components/organisms/About';
import Interests from './components/organisms/Interests';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import Projects from './components/organisms/Projects';

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Interests />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
