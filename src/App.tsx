import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import About from './components/organisms/About';
import Features from './components/organisms/Features';
import Interests from './components/organisms/Interests';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Interests />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
