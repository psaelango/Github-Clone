import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function SpinnerCircle() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerCircle;
