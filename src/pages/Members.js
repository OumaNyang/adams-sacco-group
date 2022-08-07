import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Members() {
  return (
<div className="container mt-5">
<div class=""> 


    <Card>
      <Card.Header as="h5">Add Member</Card.Header>
      <Card.Body>
        <Card.Text>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoneno">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="text" placeholder="Format 254712345678" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Adress</Form.Label>
        <Form.Control type="text" placeholder="Email Adress" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicResidence">
        <Form.Label>Residential Address</Form.Label>
        <Form.Control type="text" placeholder="Residence" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRegdate">
        <Form.Label>Registration date</Form.Label>
        <Form.Control type="date" placeholder="Residence" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

      </Card.Text>
      </Card.Body>
    </Card>
 
    </div>
    </div>
  );
}
