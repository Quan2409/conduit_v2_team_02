import React from "react";
import { Card, Container } from "react-bootstrap";
import "./home.css";

function Home(props) {
  return (
    <div className="bg-all">
      <div className="welcome-box">
        <h1 className="welcome-text">~ Welcome to Conduit 2.0 ~</h1>
        <h5 className="sub-welcome">
          " Learn from yesterday, live for today, hope for tomorrow "
        </h5>
      </div>
      <Container className="article-content py-3">
        <Card
          className="mx-auto mb-5"
          border="success"
          style={{ width: "50rem" }}
        >
          <Card.Header className="py-3 d-flex justify-content-between">
            <div className="d-flex">
              <div className="avatar"></div>
              <div className="d-flex align-items-center ms-3">
                <p className="mb-0">User name</p>
              </div>
            </div>
            <div className="d-flex align-items-center"><p className="mb-0">Like</p></div>
          </Card.Header>
          <Card.Img
            variant="top"
            src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/BMD-3398.png"
          />
          <Card.Body>
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="mx-auto mb-5"
          border="success"
          style={{ width: "50rem" }}
        >
          <Card.Header className="py-3 d-flex">
            <div className="avatar"></div>
            <div className="d-flex align-items-center ms-3">
              <p className="mb-0">User name</p>
            </div>
          </Card.Header>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-vector/content-author-writing-creative-article-flat-vector-illustration_778687-2653.jpg?semt=ais_hybrid"
          />
          <Card.Body>
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Home;
