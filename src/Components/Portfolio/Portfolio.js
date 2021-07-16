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
    const CatagoryButton = ({ catagoryName, handleSetcatagory }) => {
        return <button class="button" onClick={() => handleSetcatagory(catagoryName)}>{catagoryName.toUpperCase()}</button>;
    }

    return (
        <section class="heading-section container pt-5" id="portfolio">
            <div className="container">
                <div className="row">
                    <div class="filters filter-button-group pt-5">
                        <h2 class="text-center" data-aos={"fade-left"}>Portfolio</h2>
                        <p class="text-center" data-aos={"fade-left"}>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                            sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                            Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                    <div id="container" class="isotope" data-aos="fade-up">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center" handleSetcatagory={Setcatagory}>
                                    <CatagoryButton catagoryName="all" handleSetcatagory={Setcatagory} />
                                    <CatagoryButton catagoryName="app" handleSetcatagory={Setcatagory} />
                                    <CatagoryButton catagoryName="web" handleSetcatagory={Setcatagory} />
                                    <CatagoryButton catagoryName="card" handleSetcatagory={Setcatagory} />
                                </div>
                            </div>
                            <SRLWrapper>
                                {
                                    filterProject.map((portfolio) =>
                                        <div class="grid-item col-md-4" key={portfolio.id}>
                                            <img src={portfolio.imageUrl} class="img-fluid" style={{ width: "100%", height: "300px" }} />

                                            <div class="overlay">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="overlay-title">
                                                        <h5>App 1</h5>
                                                        <p>App</p>
                                                    </div>

                                                    <div>

                                                        {/* <a class="popupimg"
                                                            href={portfolio.imageUrl}>
                                                            <i class="fas fa-plus"></i>
                                                            
                                                        </a> */}

                                                        <a href="Index.html">
                                                            <i class="fas fa-link"></i>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            </SRLWrapper>
                        </div>




                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;