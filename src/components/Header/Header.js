import React from 'react';
// @ts-ignore
import Logo from "../../logo.svg"



const Header = () => {
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand pt-0 pb-0" >
                <div className="container header" style={{padding:'20px 0px'}}> 
                    {/* Navbar Brand*/}
                    <a className="navbar-brand " href="/" >
                        <img className="navbar-brand-sticky mb-0 " src={Logo} alt="sticky brand-logo" style={{width:'65px',height:'65px'}}/>
                    </a>
                    

                    <div className="ml-10" />
                    {/* Navbar */}
                    <ul className="navbar-nav items mx-auto">
                    
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#showcase">Showcase</a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="#comic" className="nav-link">Comic book</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#map">Roadmap </a>
                            {/* <ul className="dropdown-menu">
                                <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
                                <li className="nav-item"><a href="/blog-single" className="nav-link">Blog Single</a></li>
                                <li className="nav-item"><a href="/help-center" className="nav-link">Help Center</a></li>
                            </ul> */}
                        </li>
                        
                        <li className="nav-item">
                            <a href="#faq" className="nav-link">FAQs</a>
                        </li>
                        
                    </ul>
           
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0" />
                            </a>
                        </li>
                    </ul>
            
                </div>
            </nav>
        </header>
    );
};

export default Header;