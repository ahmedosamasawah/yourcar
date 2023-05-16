import { useState } from 'react';
import Footer from './components/footer/Footer';
import { useDisclosure } from '@chakra-ui/react';
import Navbar from './components/HeroSection/Navbar';
import Cart from './components/HeroSection/Cart/Cart';
import HeroSection from './components/HeroSection/HeroSection';
import CarsSection from './components/carsSection/CarsSection';
import Testimonials from './components/Testimonials/Testimonials';
import LogosSection from './components/logosSection/LogosSection';
import AboutSection from './components/aboutSection/AboutSection';
import GalarySection from './components/galarySection/GalarySection';
import ServicesSection from './components/servicesSection/ServicesSection';
import MenuBar from './components/HeroSection/MenuBar/MenuBar';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [open, setOpen] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const cartHandler = () => {
    setShowCart(!showCart);
    onToggle();
  };

  const menuHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navbar onClick={cartHandler} onOpen={menuHandler} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CarsSection />
      <GalarySection />
      <Testimonials />
      <LogosSection />
      <Footer />
      {showCart && <Cart isOpen={isOpen} />}
      {open && <MenuBar />}
    </>
  );
}

export default App;
