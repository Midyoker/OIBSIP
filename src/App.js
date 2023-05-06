import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Footer from './Components/footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow ">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}
export default App;