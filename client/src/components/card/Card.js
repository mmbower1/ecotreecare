import React from "react";
import "./Card.scss";
import { Card } from "react-bootstrap";

const Tree = ({ tree }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Title as="div">
        <strong>{tree.name}</strong>
      </Card.Title>

      <Card.Body>
        <Card.Img src={tree.image} variant="top" style={{ height: "280px" }} />

        <Card.Text as="div">
          <div text={tree.description} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tree;
