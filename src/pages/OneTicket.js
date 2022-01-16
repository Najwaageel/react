import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import GamesContext from "../utils/GameContext"
import image from "../images/‏‏image2.jpg"
import image2 from "../images/image.png"
import styles from "../components/mystyle.module.css"
import Footer from "../components/Foter"

function OneTicket() {
  const { ticketId } = useParams()
  const { tickets } = useContext(GamesContext)

  if (!tickets) {
    return <h1> Loading... </h1>
  }

  const ticket = tickets.find(ticket => ticket._id === ticketId)

  return (
    <>

    
    <Row>
      <Col>
      <Card style={{ 
          backgroundImage: `url("${image}")`,
          borderRadius: "30px", 
          height: 500,
          width:300,
          marginTop:230,
          marginLeft:300,
          position:"absolute",
           }} >
        <Card.Body>
          <Card.Title className={styles.name}>
            {ticket?.owner.firstName} {ticket?.owner.lastName}
          </Card.Title>
          <Card.Text className={styles.text}> {ticket?.gameId.name} </Card.Text>
          <Card.Text className={styles.text}> {ticket?.date} </Card.Text>
          <Card.Img className={styles.img2} style={{ borderRadius: "15px" }} variant="top" src={ticket?.qrcode} />
        </Card.Body>
      </Card>
      </Col>
      <Col >
        <img
          src={image2}
          width="100%" 
        />
      </Col>
      </Row>
      <Footer/>
    </>
  )
}

export default OneTicket
