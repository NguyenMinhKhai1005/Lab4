import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const Cart = () => {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch("https://api-demo-4gqb.onrender.com/products");

        const data = await res.json();

        setItems(data.data);
      } catch (error) {
        console.log(error.messages);
      }
    };

    fetchItem();
  }, []);

  return (
    <>
      <h2 className="mt-5">Pizza List</h2>
      <Container>
        <Row>
          {items.map((dish) => (
            <Col>
              <Card key={dish.id}>
                <Card.Img variant="top" src={dish.image} />
                <Card.Body>
                  <Card.Title>{dish.title}</Card.Title>
                  <Card.Text>${dish.price}</Card.Text>
                  <Button variant="danger" onClick={() => addToCart(dish)}>
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cart;
