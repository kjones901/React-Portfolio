import React, { useState } from 'react';
import NavTabs from './navbar/NavTabs';
import Home from './pages/Home/Home';
import About from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import { PageContent, BottomTear, TopTear } from './BasicStyle';
import BottomTearImage from '../assets/BottomPageTear.png';
import TopTearImage from '../assets/TopPageTear.png'

export default function PrimaryContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <TopTear src={TopTearImage}></TopTear>
      <PageContent>
      {renderPage()}
      </PageContent>
      <BottomTear src={BottomTearImage}/>
    </div>
  );
}
