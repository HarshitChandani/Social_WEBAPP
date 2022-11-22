import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Subscribe = () => {
  const [email, handleEmail] = useState("");

  const sendEmailAsync = () => {};

  return (
    <div className="w-50">
      <Form.Group>
        <Form.Label>Send us your e-mail for news updates</Form.Label>
        <Form.Control
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
        />
        <Button
          variant="outline-success"
          className="my-2"
          disabled={email === "" ? true : false}
          onClick={sendEmailAsync}
        >
          Subscribe
        </Button>
      </Form.Group>
    </div>
  );
};

export default Subscribe;
