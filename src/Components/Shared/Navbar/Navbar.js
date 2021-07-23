import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        // scroll navbar
        var nav = document.querySelector('nav');

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                nav.classList.add('navbarTrasform', 'shadow');

            } else {
                nav.classList.remove('navbarTrasform', 'shadow')
            }
        });
        // scroll navbar end
    }, [])

    useEffect(() => {
        // Active Menu start
        // Get the container element
        var btnContainer = document.getElementById("navbarText");

        // Get all buttons with className="btn" inside the container
        var btns = btnContainer.getElementsByClassName("nav-link");

        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
        // Active Menu end
    }, [])

    return (
        <div>

            <div className="col-md-12 col-sm-12 col-lg-12">
                <nav className="navbar navbar-expand-lg fixed-top navbar-light p-3">
                    <div className="container logoText">
                        <a className="logo text-light" href="#">ARSHA </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navbarCustom" id="navbarText">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link text-light active" href="#">Home</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-light" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#portfolio">Portfolio</a>
                                </li>

                                <li className="nav-item">
                                    <div className="dropdown">
                                        <a className="nav-link text-light" href="#">Drop Down <i
                                            className="fas fa-chevron-down"></i></a>
                                        <div className="dropdown-content">
                                            <a href="#">Dropdown 1</a>
                                            <a href="#">Dropdown 2</a>
                                            <a href="#">Dropdown 3</a>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#team">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="navbar-button rounded-pill">Get
                                        Started</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* navbar end  */}
        </div>
    );
};

export default Navbar;