import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';

const services = [
  {
    id: 1,
    title: 'E-ROLL',
    description: `'Apuni Sarkar' carries a vision to transform the State into a Digitally empowered society and deliver Citizen Centric services.`,
    img: '/public/ERoll.jpg',
    link: '/apply-excise'
  },
  {
    id: 2,
    title: 'E-ARMS',
    description: 'UTC is a public sector passenger road transport corporation providing services in the state of Uttarakhand.',
    img: '/public/EArms.png',
    link: '/e-toddy'
  },
  {
    id: 3,
    title: 'E-OFFICE',
    description: 'The Corbett Tiger Reserve is not just a tourist destination but a testament to successful wildlife conservation.',
    img: '/public/EOffice.webp',
    link: '/e-or'
  },
  {
    id: 4,
    title: 'E-TREASURY',
    description: 'There are four holy shrines in Uttarakhand dedicated to Hindu Gods and holy rivers of India. The four shrines are situated.',
    img: '/public/ETreasury.jpg',
    link: '/e-roll'
  },
  {
    id: 5,
    title: 'E-VACANCY',
    description: 'There are four holy shrines in Uttarakhand dedicated to Hindu Gods and holy rivers of India. The four shrines are situated.',
    img: '/public/EVacancy.png',
    link: '/e-roll'
  },
  {
    id: 6,
    title: 'E-TENDER',
    description: 'There are four holy shrines in Uttarakhand dedicated to Hindu Gods and holy rivers of India. The four shrines are situated.',
    img: 'public/ETender.png',
    link: '/e-roll'
  },
  {
    id: 7,
    title: 'FLEET',
    description: 'There are four holy shrines in Uttarakhand dedicated to Hindu Gods and holy rivers of India. The four shrines are situated.',
    img: 'https://keralaexcise.gov.in/wp-content/uploads/2020/12/fleet.png',
    link: '/e-roll'
  },
  {
    id: 8,
    title: 'NCORD',
    description: 'There are four holy shrines in Uttarakhand dedicated to Hindu Gods and holy rivers of India. The four shrines are situated.',
    img: 'https://keralaexcise.gov.in/wp-content/uploads/2022/09/ncord.png',
    link: '/e-roll'
  }
];

const OnlineServices = () => {  
  return (
    
    <div style={{ backgroundColor: '#374A67', padding: '40px 0', marginLeft:'-5%', width: '110%' }}>
      <Typography className='Title-card-section'> <h5>
        Useful E-Services</h5>
      </Typography>
      <Typography className='Title-card-section-b'>
       <h2>Online Services</h2> 
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ padding: '0 10%', marginTop:'2%' }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id}>
            <Card sx={{     height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="180"
                image={service.img}
                alt={service.title}
              />
              <CardContent
                sx={{
                  flex: '1 1 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: '#1a1a2e', fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4b4b4b', marginBottom: '15px', minHeight: '60px' }}>
                  {service.description}
                </Typography>
                <Button
                  href={service.link}
                  sx={{
                    color: '#007bff',
                    fontWeight: 'bold',
                    alignSelf: 'flex-start',
                    marginBottom: '0%'
                  }}
                >
                  More →
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
   
  );
};

export default OnlineServices;
