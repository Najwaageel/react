import { Card, Col } from "react-bootstrap"



function GameItem(props) {
  const { game } = props

  return (
    <Col>
      <Card border="light" style={{ maxWidth: "200px" }}>
          <Card.Img variant="top" src={game.image} height="220px" style={{ borderRadius: "10px" }} />
        <Card.Body>
            <Card.Title>{game.name}</Card.Title>
          <Card.Text className="text-muted">{game.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default GameItem