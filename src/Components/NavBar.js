import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);

            }else{
                setScrolled(true)
            }
        }
        window.addEventListener("scroll", onScroll)
        return ()=> window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="/">
                    
                    <img src={logo} alt='Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">

                 

                <Nav className="me-auto">
                    <Nav.Link href="#Home" className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link' } onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#Decoraciones" className={activeLink === 'Decoraciones' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')} >Decoraciones</Nav.Link>
                    <Nav.Link href="#Origen" className={activeLink === 'Origen' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Origen</Nav.Link>

                    <Nav.Link href="#Significado" className={activeLink === 'Significado' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('compras')}>Significado</Nav.Link>
                    <Nav.Link href="#Tradiciones" className={activeLink === 'Tradiciones' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('pagos')}>Tradiciones</Nav.Link>
                    <Nav.Link href="#Historia" className={activeLink === 'Historia' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('ofertas')}>Historia</Nav.Link>
                    <Nav.Link href="#Compras" className={activeLink === 'Compras' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('blog')}>Compras</Nav.Link>
                    <Nav.Link href="#Ofertas" className={activeLink === 'Ofertas' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('nosotros')}>Ofertas</Nav.Link>
                    <Nav.Link href="#Nosotros" className={activeLink === 'Nosotros' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contacto')}>Nosotros</Nav.Link>
                    <Nav.Link href="#Contacto" className={activeLink === 'Contacto' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contacto')}>Contacto</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        
                        <a href="#"> <img src={navIcon1} alt=""/></a>
                        <a href="#"> <img src={navIcon2} alt=""/></a>
                        <a href="#"> <img src={navIcon3} alt=""/></a>

                    </div>
                    <button className="vvd" onClick={()=>console.log('Conectado')}><span>Iniciar Sesion</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}