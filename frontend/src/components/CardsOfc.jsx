import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../css/cards.css'

function CardsOfc() {
  return (
    <div className="gradient-background-w">
    <div className='cards-ofc'>

    <div className='Title-card-section'>
        <h5>Kerala State Government</h5>
        <h2>Leaders of Excise Department</h2>
    </div>

    <div className='Entire-card-section'>

    <CardGroup className='Card-Group'>
      <Card className='card-each'>
        <Card.Img variant="top" src="\public\Pinarayi Vijayan Sir.png" />
        <Card.Body>
          <Card.Title className='Card-Title'>Sri Pinarayi Vijayan</Card.Title>
          <Card.Text className='Card-Designation'>
            Hon. Chief Minister
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='card-each'>
        <Card.Img variant="top" src="\public\MB Rajesh.png" />
        <Card.Body>
          <Card.Title className='Card-Title'>Sri M. B. Rajesh</Card.Title>
          <Card.Text className='Card-Designation'>
            Hon. Excise Minister
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card className='card-each'>
        <Card.Img variant="top" src="\public\JAYA IAS.png" />
        <Card.Body>
          <Card.Title className='Card-Title'>Dr. A. Jayathilak IAS</Card.Title>
          <Card.Text className='Card-Designation'>
            Addl. Chief Secretary Taxes
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card className='card-each'>
        <Card.Img variant="top" src="\public\Mahipal IPS.png" />
        <Card.Body>
          <Card.Title className='Card-Title'>Sri Mahipal Yadav IPS</Card.Title>
          <Card.Text className='Card-Designation'>
            Excise Commissioner
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
    </div>
    </div>
    </div>
  );
}

export default CardsOfc;