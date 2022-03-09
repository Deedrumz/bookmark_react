import React from 'react'
import './Footer.css'
import logo from './img/logo-bookmark.svg'
import Facebook from './img/icon-facebook.svg'
import Twitter from './img/icon-twitter.svg'

const Footer = () => {
  return (
      <div>

           {/* BLUE FOOOTER */}
                                                                                    <div className='movefoot1'>
                                                                                        <div className='foot1'>
                                                                                            <div className='foottext1'>
                                                                                                    <p>35,000+ ALREADY JOINED</p>
                                                                                                    <h2>Stay up-to-date with what we're doing</h2>

                      
                                                                                                <div className='inpcu'>
                                                                                                    <div className='moveinp'>
                                                                                                        <input id='inp' type="text" placeholder='Enter your email address' />
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className='movecu'>
                                                                                                            <button id='cu'>Contact Us</button>
                                                                                                    </div>
                                                                                                </div>  
                      
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
          

          {/* DARK BLUE FOOTER */}

          
                                                                                        <div className='foot2'>
                                                                                            <div className='movefootcont'>

                  
                                                                                                    <div className='logofoottext'>
                                                                                                        <div className='logonbook'>
                                                                                                            <img id='footlogo' src={logo} alt="" />
                                                                                                            {/* <p id='book'>BOOKMARK</p>  */}
                                                                                                        </div>

                  

                                                                                                                <div className='foottext2'>
                                                                                                                    <div id='fpcgap'>
                                                                                                                            <a id='fpc' href="#">FEATURES</a>
                                                                                                                    </div>
                                                                                                                    
                                                                                                                    <div id='fpcgap'>
                                                                                                                            <a id='fpc' href="#">PRICING</a>
                                                                                                                    </div>
                                                                                                                    
                                                                                                                    <div id='fpcgap'>
                                                                                                                    <a id='fpc' href="#">CONTACT</a>
                                                                                                                    </div>
                                                                                                                    
                                                                                                                </div>
                                                                                                    </div>
                            
                            
                                                                                                                <div className='footicon'>
                                                                                                                    <div>
                                                                                                                            <img id='fb' src= {Facebook} alt="" />
                                                                                                                    </div>
                                                                                                                    
                                                                                                                    <div>
                                                                                                                            <img id='tw' src= {Twitter} alt="" />
                                                                                                                    </div>
                                                                                                                </div>
                                                                                            </div>
                                                                                        </div>



          {/* DARK BLUE TWO */}
                                                                        {/* <section>
                                                                                                <div className='foot3'>
                                                                                                        <div className='logonbook'>
                                                                                                            <img id='footlogo' src={logo} alt="" />
                                                                                                        </div>

                                                                                                        <div className='foottext3'>
                                                                                                                   
                                                                                                                            <a id='fpc1' href="">FEATURES</a>
                                                                                                                    
                                                                                                                    
                                                                                                                   
                                                                                                                            <a id='fpc1' href="">PRICING</a>
                                                                                                                   
                                                                                                                    
                                                                                                                    
                                                                                                                    <a id='fpc1' href="">CONTACT</a>
                                                                                                                   
                                                                                                                    
                                                                                                        </div>

              
                                                                                                        <div className='footicon'>
                                                                                                                    <div>
                                                                                                                            <img id='fb' src= {Facebook} alt="" />
                                                                                                                    </div>
                                                                                                                    
                                                                                                                    <div>
                                                                                                                            <img id='tw' src= {Twitter} alt="" />
                                                                                                                    </div>
                                                                                                        </div>
                                                                                                </div>


                                                                        </section> */}
























    </div>
  )
}

export default Footer