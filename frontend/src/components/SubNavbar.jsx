// SubNavbar.jsx
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

function SubNavbar() {
  const [date, setDate] = useState(new Date());
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [language, setLanguage] = useState('English'); // Default language

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Function to increase font size
  const increaseFontSize = () => setFontSize((prevSize) => Math.min(prevSize + 1, 20));

  // Function to decrease font size
  const decreaseFontSize = () => setFontSize((prevSize) => Math.max(prevSize - 1, 12));

  // Toggle language between English and Malayalam
  const toggleLanguage = () => setLanguage((prevLang) => (prevLang === 'English' ? 'Malayalam' : 'English'));

  return (
    <div className="sub-navbar w-100" style={{ fontSize: `${fontSize}px` }}>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <span className='datetime'>{date.toLocaleString()}</span>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <div className="font-controls">
          <button onClick={increaseFontSize} className="btn btn-outline-primary mx-1 acustom">A+</button>
          <button onClick={decreaseFontSize} className="btn btn-outline-primary mx-1 acustom">A-</button>
        </div>
        <button onClick={toggleLanguage} className="btn btn-outline-secondary">
          {language === 'English' ? 'മലയാളം' : 'English'}
        </button>
      </Container>
    </div>
  );
}

export default SubNavbar;
