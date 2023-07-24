import React, { useState } from 'react';
import NavTabs from './navbar/NavTabs';
import Home from './pages/Home/Home';
import About from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import { PageContent } from './styled/BasicStyle';

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
      <PageContent>
      {renderPage()}
      </PageContent>
    </div>
  );
}
