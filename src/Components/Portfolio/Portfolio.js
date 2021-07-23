import React, { useEffect, useState } from 'react';
import './Portfolio.css'
import { SRLWrapper } from "simple-react-lightbox";

import AOS from 'aos';
import "aos/dist/aos.css"

const Portfolio = () => {
    const [catagory, Setcatagory] = useState("all")
    const [filterProject, setfilterProject] = useState([])

    useEffect(() => {
        catagory === 'all' ? setfilterProject(allproject) : setfilterProject(allproject.filter(project => project.catagory === catagory))
    }, [catagory])

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    const allproject = [
        {
            id: 1,
            imageUrl: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-1.jpg",
            projectName: 'nice app',
            catagory: 'app'
        },
        {
            id: 2,
            imageUrl: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-2.jpg",
            projectName: 'nice app',
            catagory: 'web'
        },
        {
            id: 3,
            imageUrl: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-3.jpg",
            projectName: 'nice card',
            catagory: 'card'
        },
        {
            id: 4,
            imageUrl: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-4.jpg",
            projectName: 'nice web',
            catagory: 'web'
        },
        {
            id: 5,
            imageUrl: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-5.jpg",
            ProjectName: 'nice app',
            catagory: 'app'
        },
        {
            id: 6,
            imageUrl: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-6.jpg",
            projectName: 'nice card',
            catagory: 'card'
        },
        {
            id: 7,
            imageUrl: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-7.jpg",
            projectName: 'nice web',
            catagory: 'web'
        },
        {
            id: 8,
            imageUrl: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-8.jpg",
            projectName: 'nice app',
            Catagory: 'app'
        },
        {
            id: 9,
            imageUrl: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-9.jpg",
            projectName: 'nice web',
            catagory: 'web'
        }

    ]

    // catagory button
    const CatagoryButton = ({ catagoryName, handleSetcatagory, catagoryActive }) => {
        return <button className={`button ${catagoryActive ? 'portfolioactive' : null}`} onClick={() => handleSetcatagory(catagoryName)}>{catagoryName.toUpperCase()}</button>;
    }
    // catagory button end

    return (
        <section className="heading-section container pt-5" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="filters filter-button-group pt-5">
                        <h2 className="text-center" data-aos={"fade-left"}>Portfolio</h2>
                        <p className="text-center" data-aos={"fade-left"}>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                            sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                            Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                    <div id="container" className="isotope" data-aos="fade-up">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center" id="navbarText" handleSetcatagory={Setcatagory}>
                                    <CatagoryButton catagoryName="all" handleSetcatagory={Setcatagory} catagoryActive={catagory === 'all' ? true : false} />
                                    <CatagoryButton catagoryName="app" handleSetcatagory={Setcatagory} catagoryActive={catagory === 'app' ? true : false} />
                                    <CatagoryButton catagoryName="web" handleSetcatagory={Setcatagory} catagoryActive={catagory === 'web' ? true : false} />
                                    <CatagoryButton catagoryName="card" handleSetcatagory={Setcatagory} catagoryActive={catagory === 'card' ? true : false} />
                                </div>
                            </div>
                           
                                {
                                    filterProject.map((portfolio) =>
                                        <div className="grid-item col-md-4" key={portfolio.id}>
                                             <SRLWrapper>
                                            <img src={portfolio.imageUrl} className="img-fluid" style={{ width: "100%", height: "300px" }} />
                                            </SRLWrapper>
                                            <div className="overlay">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="overlay-title">
                                                        <h5>App 1</h5>
                                                        <p>App</p>
                                                    </div>

                                                    <div>

                                                        {/* <a className="popupimg"
                                                            href={portfolio.imageUrl}>
                                                            <i className="fas fa-plus"></i>
                                                            
                                                        </a> */}

                                                        <a href="Index.html">
                                                            <i className="fas fa-link"></i>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            
                        </div>




                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;