import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { GivingliCash } from './components/GivingliCash';
import { Gifts } from './components/Gifts';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="page-wrapper">
          <Hero />
          <Features />
          <GivingliCash />
          <Gifts />
          <FooterCTA />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;