import React from 'react';
import About from '../About/About';
import Accordion from '../About/Accordion';
import Action from '../Action/Action';
import Clients from '../Clients/Clients';
import Frequently from '../Frequently/Frequently';
import Header from '../Header/Header';
import NewsLetter from '../NewsLetter/NewsLetter';
import Portfolio from '../Portfolio/Portfolio';
import Price from '../Price/Price';
import Services from '../Services/Services';
import Contact from '../Shared/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Skills from '../Skills/Skills';
import Team from '../Team/Team';
import Widget from '../Widget/Widget';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Clients></Clients>
            <About></About>
            <Accordion></Accordion>
            <Skills></Skills>
            <Services></Services>
            <Action></Action>
            <Portfolio></Portfolio>
            <Team></Team>
            <Price></Price>
            <Frequently></Frequently>
            <Contact></Contact>
            <NewsLetter></NewsLetter>
            <Widget></Widget>
            <Footer></Footer>
        </>
    );
};

export default Home;