import React from 'react';
import Card from 'react-bootstrap/Card';

function QuoteCard({ text }) {
  return (
    <Card style={{ width: '20rem', height: '10rem', overflowWrap: 'break-word' }} className="d-flex align-items-center justify-content-center">
      <Card.Text className="font-weight-bold font-size-lg">{text}</Card.Text>
    </Card>
  );
}

export default QuoteCard;
