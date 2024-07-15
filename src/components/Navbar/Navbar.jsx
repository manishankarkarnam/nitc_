import React, {useEffect} from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-scroll';


const Navbar = () => {

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

  return (
        <div className='container Navbar' id='navbar'>
            <div>
                <Link to="hero" spy={true} smooth={true} offset={0} duration={500}><img src={logo} alt="logo" className='logo'/></Link>
            </div>
                <ul className='list'>
                    <li><Link to="hero" spy={true} smooth={true} offset={0} duration={500} >Home</Link></li>
                    <li><Link to="graduation" spy={true} smooth={true} offset={-250} duration={500}>Program</Link></li>
                    <li><Link to="About" spy={true} smooth={true} offset={-150} duration={500}>About us</Link></li>
                    <li><Link to="Gallery" spy={true} smooth={true} offset={-250} duration={500}>Campus</Link></li>
                    <li><Link to="testimonials" spy={true} smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
                    <li><Link to="contact" spy={true} smooth={true} offset={-250} duration={500}><button className='contactButton'>Contact us</button></Link></li>
                </ul>
        </div>
  )
}

export default Navbar