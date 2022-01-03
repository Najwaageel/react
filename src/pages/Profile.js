import { useContext } from "react"
import GamesContext from "../utils/GameContext"
import { Col, Container, Image, Row } from "react-bootstrap"
import styles from "../components/mystyle.module.css" 
import GameItem from "../components/GameItem"
import GameCard from "../components/GameCard"


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
          <h3 style={{ color: "rgb(85, 161, 163)" }}> My Favourite Games </h3>
          {profile.likes.map(game => (
            <GameCard game={game} key={game._id} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Profile
