import React from 'react'
import './Main.css'
import { Accordion } from 'react-bootstrap';
import Tab from './img/illustration-features-tab-1.svg'
import ChromeIcon from './img/logo-chrome.svg'
import Dot from './img/bg-dots.svg'
import FirefoxIcon from './img/logo-firefox.svg'
import OperaIcon from './img/logo-opera.svg'

const Main = () => {
  return (
    <div className='body'>

                                                                                  <section className='feaacco'>
                                                                                    <div className='feapara'>
                                                                                      <h2 className='fea'>Features</h2>
                                                                                      <p className='para1'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                                                                                      </p>
                                                                                    </div>

                                                                                    {/* ACCORDION DROPDOWN PART */}
                                                                                    <Accordion defaultActiveKey="0">
                                                                                      <Accordion.Item eventKey="0">
                                                                                        <Accordion.Header id='sse'>Simple Bookmarking</Accordion.Header>
                                                                                        <Accordion.Body>
                                                                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim

                                                                                        </Accordion.Body>
                                                                                      </Accordion.Item>
                                                                                      <Accordion.Item eventKey="1">
                                                                                        <Accordion.Header id='sse'>Speedy Searching</Accordion.Header>
                                                                                        <Accordion.Body>
                                                                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim

                                                                                        </Accordion.Body>
                                                                                      </Accordion.Item>
                                                                                      <Accordion.Item eventKey="2">
                                                                                        <Accordion.Header id='sse'>Easy Sharing</Accordion.Header>
                                                                                        <Accordion.Body>
                                                                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim

                                                                                        </Accordion.Body>
                                                                                      </Accordion.Item>
                                                                                    </Accordion>

                                                                                  </section>


                                                                              <div className='section2'>
                                                                                  <section className='allbgrctab'>
                                                                                                  <div className='bgrctab'>
                                                                                                    <div className='bgrc2'></div>
                                                                                                    <div className='movetab'>
                                                                                                      <img id='tab' src={Tab} alt="" />
                                                                                                    </div>
                                                                                                  </div>
                                                                                  </section>


                                                                                  <section className='bookmparainfo'>
                                                                                    <div className='bookmpara'>
                                                                                      <h2 className='bookm'>Bookmark in one click</h2>
                                                                                      <p className='para2'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites. </p>
                                                                                      <div className='movemoreinfo1'>
                                                                                          <button id='moreinfo1'>More Info</button>
                                                                                        </div>
                                                                                    </div>

                                                                                  </section>
                                                                                </div>
      



                                                                                  <section>
                                                                                    <div className='downpara'>
                                                                                      <h2 className='downl'>Download the extension</h2>
                                                                                      <p className='para3'>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize. </p>
                                                                                    </div>

                                                                                  </section>

                                                                                  {/* EXTENSION ICON LAYER PART */}

                                                                                              {/* CHROME */}
                                                                                   <div className='section3'>           
                                                                                            <div className='movechromesec'>
                                                                                              <div className='chromesec'>
                                                                                                
                                                                                                    <div className='moveci'>
                                                                                                        <img src= {ChromeIcon} alt="" />
                                                                                                    </div>
                                                                                                  
                                                                                                      <div className='chromepara'>
                                                                                                        <h2>Add to Chrome</h2>
                                                                                                        <p id='para4'>Minimum version 62</p>
                                                                                                      </div>
                                                                                                      
                                                                                                          <img src={Dot} alt="" />
                                                                                                          
                                                                                                        <div className='moveaddchrome'>
                                                                                                          <button id='addchrome'>Add & Install Extension</button>
                                                                                                        </div>
                                                                                                        
        
                                                                                              </div>
                                                                                            </div>
                                                                                                
      

                                                                                                  {/* FIREFOX */}
                                                                                          <div className='movefirefox'>
                                                                                            <div className='movechromesec'>
                                                                                              <div className='chromesec'>
                                                                                                
                                                                                                    <div className='moveci'>
                                                                                                        <img src= {FirefoxIcon} alt="" />
                                                                                                    </div>
                                                                                                  
                                                                                                      <div className='chromepara'>
                                                                                                        <h2>Add to Chrome</h2>
                                                                                                        <p id='para4'>Minimum version 55</p>
                                                                                                      </div>
                                                                                                      
                                                                                                          <img src={Dot} alt="" />
                                                                                                          
                                                                                                        <div className='moveaddchrome'>
                                                                                                          <button id='addchrome'>Add & Install Extension</button>
                                                                                                        </div>
                                                                                                        
        
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>  
      
                                                                                            {/* OPERA */}
                                                                                          
                                                                                          <div className='moveopera'>
                                                                                            <div className='movechromesec'>
                                                                                              <div className='chromesec'>
                                                                                                
                                                                                                    <div className='moveci'>
                                                                                                        <img src= {OperaIcon} alt="" />
                                                                                                    </div>
                                                                                                  
                                                                                                      <div className='chromepara'>
                                                                                                        <h2>Add to Opera</h2>
                                                                                                        <p id='para4'>Minimum version 46</p>
                                                                                                      </div>
                                                                                                      
                                                                                                          <img src={Dot} alt="" />
                                                                                                          
                                                                                                        <div className='moveaddchrome'>
                                                                                                          <button id='addchrome'>Add & Install Extension</button>
                                                                                                        </div>
                                                                                                        
        
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>  
        

                                                                                    </div>         
      
                                                                                              {/* FAQ SECTION */}
                                                                                              
                                                                                  <section className='allfaq'>
                                                                                              <div className='faqpara'>
                                                                                                <h2 className='faq'>Frequently Asked Questions</h2>
                                                                                                <p className='para5'>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us. </p>
                                                                                              </div>

                                                                                  </section>
                                                                                  
      

                                                                                    {/* ACCORDION DROPDOWN PART */}
                                                                                    
                                                                                  <div className='faqaccordion'>
                                                                                    <Accordion defaultActiveKey="0">
                                                                                      <Accordion.Item eventKey="0">
                                                                                        <Accordion.Header>What is Bookmark</Accordion.Header>
                                                                                        <Accordion.Body>
                                                                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim

                                                                                        </Accordion.Body>
                                                                                      </Accordion.Item>
                                                                                      <Accordion.Item eventKey="1">
                                                                                        <Accordion.Header>How can I request a new browser</Accordion.Header>
                                                                                        <Accordion.Body>
                                                                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim

                                                                                        </Accordion.Body>
                                                                                      </Accordion.Item>
                                                                                      <Accordion.Item eventKey="2">
                                                                                        <Accordion.Header>Is there a mobile app</Accordion.Header>
                                                                                        <Accordion.Body>
                                                                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim

                                                                                        </Accordion.Body>
                                                                                      </Accordion.Item>
                                                                                      
                                                                                      <Accordion.Item eventKey="3">
                                                                                        <Accordion.Header>What about other chromium browsers?</Accordion.Header>
                                                                                        <Accordion.Body>
                                                                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim

                                                                                        </Accordion.Body>
                                                                                      </Accordion.Item>
                                                                                    </Accordion>
                                                                                  </div>
                                                                                  
                                                                                            <div className='movemoreinfo'>
                                                                                              <button id='moreinfo'>More Info</button>
                                                                                            </div>

      
























    </div>
  )
}

export default Main