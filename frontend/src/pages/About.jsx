import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/aboutdpt.css'
import keralaMap from '/keralamap.png'; 

const AboutDepartment = () => {
  return (
    <div className='background-cont'>
    <Container fluid className="about-department-section">
      <div className="section-header text-center">
        <h5>Explore</h5>
        <h2>About The Department</h2>
      </div>
      
      <Row className="align-items-center content-row">
        {/* Left Column */}
        <Col md={6} className="overview-text">
          <h3>Overview</h3>
          <p>
            Excise Department is one of the oldest Departments in the State and it contributes a major share of the State Revenue.
            The Department is administering laws related to Liquor, Narcotic Drugs and Psychotropic Substances, and Medicinal Preparations
            containing alcohol and narcotic drugs, etc.
          </p>
          <a href="/more-info" className="read-more-link">
            Read More →
          </a>
        </Col>
        
        {/* Right Column */}
        <Col md={6} className="image-section">
          <img src={keralaMap} alt="Districts of Kerala" className="kerala-map" />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default AboutDepartment;
