import React from 'react';
import Card from 'react-bootstrap/Card';

function LongCard({ imageUrl, title, text }) {
  return (
    <Card style={{ width: '35%', display: 'flex', flexDirection: 'row' }}>
      <Card.Img variant="top" src={imageUrl} style={{ width: '50%', objectFit: 'cover' }} />
      <Card.Body style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '10px' }}>
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LongCard;
