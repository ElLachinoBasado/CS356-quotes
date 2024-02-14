import React from 'react';
import Card from 'react-bootstrap/Card';

function TitleCard({ imageUrl, title }) {
  return (
    <Card style={{ width: '80%', display: 'flex', flexDirection: 'row', border: 'none' }}>
      <Card.Img variant="top" src={imageUrl} style={{ width: '25%', objectFit: 'cover' }} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px' }}>
        <div>
          <Card.Title>{title}</Card.Title>          
        </div>
      </Card.Body>
    </Card>
  );
}

export default TitleCard;
