import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import GamesContext from "../utils/GameContext"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md" // أيقونات
// import { BiLike, BiDislike } from "react-icons/md"
import RatingStars from "../components/RatingStars"
import AddComment from "../components/AddComment"
import styles from "../components/mystyle.module.css"

function OneGame() {
  const { gameId } = useParams()
  const { games, likeGame, profile } = useContext(GamesContext)

  if (!profile || games.length === 0) return <h1>Loading...</h1>

  const game = games.find(game => game._id === gameId)

  const liked = game.likes.includes(profile._id)

  
  return (
    <>
      {/* <Row> */}
        <Col md="4" >
          <img variant="top" src={game.image} width="100%" style={{ borderRadius: "10px", marginTop: "200px", marginLeft:"200px" }} />
        </Col>

        <Row className="d-flex align-items-center" >
        <Col md={{ offset: 1 }} style={{ marginTop: "50px", marginLeft:"200px"}}>
          <h1 className={styles.title5}>{game.name}</h1>
          <h4 className={styles.title5}> Price : {game.price} SR </h4>
          </Col>

          
          <Col md="2" >
          <h3 className={styles.title5}>Rating</h3>
              <span className={styles.title5}>{game.ratingAverage} / 5</span>
              <span className="ms-2" style={{ color:"rgba(95, 181, 184, 0.747" }}>({game.ratings.length})</span>
            </Col>

            <Col>
              <RatingStars gameId={game._id} />
              <Button variant="info" className="ms-3" onClick={() => likeGame(game._id)}>
                {liked ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
                {/* {liked ? <BiLike /> : <BiDislike />} */}
              </Button>
            </Col>
          </Row>
          
        
      {/* </Row> */}

    
      {localStorage.token ? (
        <>
          <Row className="mt-5">
            <h3 className={styles.text}> Comments: </h3>
            {game.comments.map(comment => (
              <Card className={styles.back} style={{ maxWidth: 300, marginLeft:"200px" }}>
                <Row>
                  <Row style={{ display: "flex", alignItems: "center" }}>
                  
                    <Col md="5">
                      <Image src={comment.owner.avatar} width="80px" roundedCircle />
                    </Col>
                    <Col className={styles.text} >
                      {comment.owner.firstName} {comment.owner.lastName}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ offset: 1 }} style={{ marginLeft: 100}} className={styles.text} >{comment.comment}</Col>
                  </Row>
                </Row>
              </Card>
            ))}
          </Row>
          <Row>
            <AddComment gameId={game._id} />
          </Row>
        </>
      ) : null}
    </>
  )
}

export default OneGame
