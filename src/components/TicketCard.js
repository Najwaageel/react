import { Card, Col } from "react-bootstrap"
import styles from "./mystyle.module.css"
import image from "../images/‏‏image2.jpg"
import { Link } from "react-router-dom"



function TicketCard(props) {
  const { ticket } = props

  return (
    <Col>
      <Card style={{ 
          backgroundImage: `url("${image}")`,
          borderRadius: "30px", 
          height: 500,
          width:255,
          marginBottom:30,
           }}>
        <Card.Body>
            <Card.Title className={styles.name}>{ticket.owner.firstName} {ticket.owner.lastName}</Card.Title>
            <Card.Text className={styles.text}> {ticket.gameId.name} </Card.Text>
            <Card.Text className={styles.text}> {ticket.date} </Card.Text>
            <Link to={`/profile/ticket/${ticket._id}`}>
            <Card.Img className={styles.img2} style={{ borderRadius: "15px" }} variant="top" src={ticket.qrcode} />
            </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default TicketCard
