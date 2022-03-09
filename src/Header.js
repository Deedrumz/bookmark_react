import React from 'react'
import './Header.css'
import logo from './img/logo-bookmark.svg'
import Hamburger from './img/icon-hamburger.svg'
import Hero from './img/illustration-hero.svg'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react'



const Header = () => {


    // const [color, setColor] = useState(initialColor)

    // let changeColor = () => {
    //     color = 
    // }
    return (
        <div className='body'>

                                                                        {/* NAVBAR FOR MOBILE VIEW */}
                                                        
                                                                                <div className='movenavbar'>
                                                                                    <Navbar bg="light" expand="">
                                                                                        <Container>
                                                                                        <img id='logo' src={logo} alt="" />
                                                                                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                                                                            <Navbar.Collapse id="basic-navbar-nav">
                                                                                            <Nav className="me-auto">
                                                                                                <Nav.Link href="#home">FEATURES</Nav.Link>
                                                                                                <Nav.Link href="#link">PRICING</Nav.Link>
                                                                                                <Nav.Link href="#link">CONTACT</Nav.Link>
                                                                                                <Nav id='movelogin1'>
                                                                                                    <button id='login1'>LOGIN</button>
                                                                                                </Nav>
                                                                                            </Nav>
                                                                                            </Navbar.Collapse>
                                                                                        </Container>
                                                                                    </Navbar>
                                                                                </div>
            

            {/* NAVBAR FOR DESKTOP VIEW FROM 1025 */}
                                                                                <div className='movenavbardesk'>
                                                                                    <Navbar bg="light" expand="lg">
                                                                                        <Container>
                                                                                        <img src={logo} alt="" />
                                                                                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                                                                            <Navbar.Collapse id="basic-navbar-nav">
                                                                                            <Nav className="me-auto">
                                                                                                <Nav.Link href="#home">FEATURES</Nav.Link>
                                                                                                <Nav.Link href="#link">PRICING</Nav.Link>
                                                                                                <Nav.Link href="#link">CONTACT</Nav.Link>
                                                                                            </Nav>
                                                                                            </Navbar.Collapse>
                                                                                            <Nav id='movelogin'>
                                                                                            <button id='login'>LOGIN</button>
                                                                                            </Nav>
                                                                                        </Container>
                                                                                    </Navbar>
                                                                                </div>



                                                        <div className='section1'>
                                                            <section className='allrecbgrc'>
                                                                                <div className='rechero'>
                                                                                    <img id='hero' src={Hero} alt="" />
                                                                                    <div className='movebgrc'>
                                                                                        <div className='bgrc'></div>
                                                                                    </div>
                                                                                </div>
                                                            </section>

                                                            <section className='allsimple'>
                                                                                <div className='simplepara'>
                                                                                        <h2 className='simple'>A Simple Bookmark Manager</h2>
                                                                                        <p className='para'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free
                                                                                        </p>
                                                                                </div>


            
                                                                                  <div className='chrofire'>  
                                                                                        <div className='movegchrome'>
                                                                                                <button id='gchrome'>Get it on chrome</button>
                                                                                        </div>
                                                                                
            
                                                                                        <div className='movegfire'>
                                                                                                <button id='gfire'>Get it on Firefox</button>
                                                                                        </div>         
                                                                                </div>
                                                                </section>
                                                        </div>

















        </div>
    )
}

export default Header