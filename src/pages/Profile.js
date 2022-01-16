import { useContext } from "react"
import GamesContext from "../utils/GameContext"
import { Col, Container, Image, Row } from "react-bootstrap"
import styles from "../components/mystyle.module.css" 
import GameCard from "../components/GameCard"
import TicketCard from "../components/TicketCard"
import Footer from "../components/Foter"



function Profile() {
  const { profile } = useContext(GamesContext)
  if (!profile) {
    return <h1>Loading...</h1>
  }
console.log(profile)

  return (
    <>
      <Container>
        <Row className="d-flex align-items-center mb-5 mt-5">
          <Col md="3">
            <Image className={styles.img} src={profile.avatar} />
          </Col>
          <Col>
            <h2 className={styles.title4}>
              {profile.firstName} {profile.lastName}
            </h2>
            <h5 className={styles.title5}>{profile.email}</h5>
          </Col>
        </Row>

        <Row className="mt-5">
          <h3 style={{ color: "rgb(85, 161, 163)", marginBottom: 30 }}> My Favourite Games </h3>
          {profile.likes.map(game => (
            <GameCard game={game} key={game._id} />
          ))}
        </Row>

        {/* التكت */}
        <Row className="mt-5">
          <h3 style={{ color: "rgb(85, 161, 163)" , marginBottom: 30  }}> My Ticket </h3>
          {profile.tickets.map(ticket => (
            
            <TicketCard ticket={ticket} key={ticket._id} /> 
            
          ))}
        </Row>

      </Container>
      <Footer />
    </>
  )
}

export default Profile
