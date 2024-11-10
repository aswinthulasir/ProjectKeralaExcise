import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaPhoneAlt, FaLink } from 'react-icons/fa';
import '../css/cards.css'


function GovtInitiatives() {
  const initiatives = [
    {
      title: 'VIMUKTHI',
      description:
        "We've introduced the CM Helpline to address issues faced by the people of Kerala.",
      link: 'http://cmhelpline.uk.gov.in',
      helpline: '1905',
      color: '#007bff',
    },
    {
      title: 'E-TODDY',
      description:
        'An expansive dashboard designed for nationwide project analysis and review.',
      link: 'https://uk.cmdashboard.nic.in/',
      color: '#9b59b6',
    },
    {
      title: 'E-LICENSES',
      description:
        "CM portal is the official website of the Chief Minister's office and governance of Kerala.",
      link: 'https://cm.uk.gov.in',
      color: '#28a745',
    },
    {
      title: 'E-FIR',
      description:
        'For donation in Chief Minister Relief Fund, Please click following link:',
      link: 'https://cmrf.uk.gov.in',
      color: '#e67e22',
    },
    {
        title: 'VEELS',
        description:
          'For donation in Chief Minister Relief Fund, Please click following link:',
        link: 'https://cmrf.uk.gov.in',
        color: '#2F3061',
      },
      {
        title: 'HELLO EXCISE',
        description:
          'For donation in Chief Minister Relief Fund, Please click following link:',
        link: 'https://cmrf.uk.gov.in',
        color: '#13262F',
      },
  ];

  return (
    <div className="gradient-background-b">
      <Container fluid className="govt-initiatives-section">
        <div className="section-header text-center">
          <h6>Useful Online Services</h6>
          <h4>Govt. of Kerala Initiatives</h4>
        </div>

        <Row className="cards-row">
          {initiatives.map((initiative, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <Card className="initiative-card">
                <div
                  className="card-header"
                  style={{ backgroundColor: initiative.color }}
                >
                  {initiative.title}
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Text>{initiative.description}</Card.Text>
                  <div>
                    <a href={initiative.link} className="card-link" target="_blank" rel="noopener noreferrer">
                      <FaLink /> {initiative.link}
                    </a>
                    {initiative.helpline && (
                      <div className="helpline">
                        <FaPhoneAlt /> Helpline No: <span>{initiative.helpline}</span>
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default GovtInitiatives;
