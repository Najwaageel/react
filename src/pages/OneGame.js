import { useContext, useState } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import GamesContext from "../utils/GameContext"
import { BiLike, BiDislike } from "react-icons/bi"
import RatingStars from "../components/RatingStars"
import styles from "../components/mystyle.module.css"
import AddComment from "../components/AddComment"
import AddTicket from "../components/AddTicket"
import Footer from "../components/Foter"

function OneGame() {
  const { gameId } = useParams()
  const { games, likeGame, profile, deleteComment } = useContext(GamesContext)

  const [show, setShow] = useState(false)

  const handleOpen = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }

  if (!profile || games.length === 0) return <h1>Loading...</h1>

  const game = games.find(game => game._id === gameId)

  const liked = game.likes.includes(profile._id)

  return (
    <>
      <Col md="4">
        <img
          variant="top"
          src={game.image}
          width="100%"
          style={{ borderRadius: "10px", marginTop: "200px", marginLeft: "200px" }}
        />
      </Col>
      

      <Row className="d-flex align-items-center">
        <Col md={{ offset: 1 }} style={{ marginTop: "50px", marginLeft: "200px" }}>
          <h1 className={styles.title5}>{game.name}</h1>
          <h4 className={styles.title5}> Price : {game.price} SR </h4>
        </Col>

        <Col md="2">
          <h3 className={styles.title5}>Rating</h3>
          <span className={styles.title5}>{game.ratingAverage} / 5</span>
          <span className="ms-2" style={{ color: "rgba(95, 181, 184, 0.747" }}>
            ({game.ratings.length})
          </span>
        </Col>

        <Col>
          <RatingStars gameId={game._id} />
          <Button style={{ borderRadius: "50px" }} variant="light" className="ms-3" onClick={() => likeGame(game._id)}>
            {liked ? <BiLike /> : <BiDislike />}
          </Button>
        </Col>
      </Row>

      {localStorage.token ? (
        <>
          <Row className="mt-5">
            <h3 className={styles.text}> Comments: </h3>
            {game.comments.map(comment => (
              <Card className={styles.back} style={{ maxWidth: 300, marginLeft: "50px", marginTop: "30px" }}>
                <Row>
                  <Row style={{ display: "flex", alignItems: "center" }}>
                    <Col md="5">
                      <Image src={comment.owner.avatar} width="80px" roundedCircle />
                    </Col>
                    <Col className={styles.text}>
                      {comment.owner.firstName} {comment.owner.lastName}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ offset: 1 }} style={{ marginLeft: 100 }} className={styles.text}>
                      {comment.comment}
                    </Col>
                    <Row style={{ marginLeft: 10, marginTop: 20 }}>
                      <Button variant="outline-danger" onClick={() => deleteComment(gameId, comment._id)}>
                        Delete
                      </Button>
                    </Row>
                  </Row>
                </Row>
              </Card>
            ))}
          </Row>
          <Row>
            <AddComment gameId={game._id} />
            <Col style={{ marginLeft: 1200, marginTop: -160, }}>
            <Button variant="info" onClick={handleOpen}> GAME TICKETS </Button>
            </Col>
            <AddTicket gameId={game._id} show={show} handleClose={handleClose} />
          </Row>
        </>
      ) : null}
       <Footer />
    </>
  )
}
export default OneGame
