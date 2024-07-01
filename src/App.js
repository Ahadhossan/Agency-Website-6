
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/UI/About';
import Blog from './components/UI/Blog';
import Counter from './components/UI/Counter';
import Footer from './components/UI/Footer';
import Hero from './components/UI/Hero';
import Newsletter from './components/UI/Newsletter';
import Services from './components/UI/Services';
import Team from './components/UI/Team';
import Testimonial from './components/UI/Testimonial';


function App() {
  const [theme, setTheme] = useState('')

  const toggleTheme = () =>{
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <Hero theme={theme}/>
    <Counter/>
    <Services/>
    <About/>
    <Team/>
    <Blog/>
    <Testimonial/>
    <Newsletter/>
    <Footer/>
    </>
  );
}

export default App;
