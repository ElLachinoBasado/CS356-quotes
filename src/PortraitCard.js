import Card from 'react-bootstrap/Card';

function PortraitCard({imageUrl, title, text}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} style={{height: '70%', objectFit: 'cover'}}/>
      <Card.Body style={{height: '30%', objectFit: 'cover'}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>        
      </Card.Body>
    </Card>
  );
}

export default PortraitCard;
