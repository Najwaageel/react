import { Card, Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "./mystyle.module.css"
import image from "../images/image22.jpg"

function GameCard(props) {
  const { game } = props

  return (
    <Col>
      <Card
        style={{
          backgroundImage: `url("${image}")`,
          borderRadius: "10px",
          fontFamily: "Isemin", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 400,
          width:255,
          marginBottom:30,
        }}
      >
        <Card.Body>
          <Link to={`/game/${game._id}`} className="text-black" style={{ textDecoration: "none" }}>
            <Card.Title className={styles.name}>{game.name}</Card.Title>
          </Link>
          <Link to={`/game/${game._id}`} className="text-black" style={{ textDecoration: "none" }}>
            <Card.Img className={styles.img2} style={{ borderRadius: "15px" }} variant="top" src={game.image} />
          </Link>
          <Card.Text className={styles.text}> Price : {game.price} SR </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default GameCard
