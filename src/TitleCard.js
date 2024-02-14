import React from 'react';
import Card from 'react-bootstrap/Card';

function TitleCard({ imageUrl, title }) {
  return (
    <Card style={{ width: '35%', display: 'flex', flexDirection: 'row', border: 'none' }}>
      <Card.Img variant="top" src={imageUrl} style={{ width: '50%', objectFit: 'cover' }} />
      <Card.Body style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px' }}>
        <div>
          <Card.Title>{title}</Card.Title>          
        </div>
      </Card.Body>
    </Card>
  );
}

export default TitleCard;
