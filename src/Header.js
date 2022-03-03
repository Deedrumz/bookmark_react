import React from 'react'
import './Header.css'
import logo from './img/logo-bookmark.svg'
import Hamburger from './img/icon-hamburger.svg'
import Hero from './img/illustration-hero.svg'
import { Navbar, Container, Nav } from 'react-bootstrap';



const Header = () => {
    return (
        <div>


                                                            {/* <nav> */}
                                                                                {/* <div className='logoham'>
                                                                                    <img src={logo} alt="" />
                                                                                    <div> */}
                                                                                <div className='movenavbar'>
                                                                                    <Navbar bg="light" expand="">
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
                                                                                        </Container>
                                                                                    </Navbar>
                                                                                </div>
            
                                                                                    {/* </div>
                                                                                </div>
                                                             </nav> */}




                                                            <section>
                                                                                <div className='rechero'>
                                                                                    <img id='hero' src={Hero} alt="" />
                                                                                    <div className='movebgrc'>
                                                                                        <div className='bgrc'></div>
                                                                                    </div>
                                                                                </div>
                                                            </section>

                                                            <section>
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
    )
}

export default Header