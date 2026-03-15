import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Why from '../components/Why';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-zinc-900">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Why />
      <Contact />
      <Footer />
    </div>
  );
}
