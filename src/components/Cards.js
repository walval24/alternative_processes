import React from "react";
import "./Cards.css";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <>
      <div className="last-articles-container">
        <h2 className="last-articles-title">Last Articles</h2>
        <div className="card-wrapper">
          <Card>
            <Card.Img
              className="card-image"
              variant="top"
              src="images/img2.jpg"
            />
            <Card.Body>
              <Card.Title className="card-title">
                BUILDING A DARKROOM FROM SCRATCH ON A BUDGET
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="card-wrapper">
          <Card>
            <Card.Img
              className="card-image"
              variant="top"
              src="images/img3.jpg"
            />
            <Card.Body>
              <Card.Title className="card-title">
                MAKING A DIGITAL NEGATIVE
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Cards;
