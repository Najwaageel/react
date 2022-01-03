import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import GameCard from "../components/GameCard"
import GamesContext from "../utils/GameContext"
import styles from "../components/mystyle.module.css"
import Navbar  from "../components/Navbar"
import Showcase from "../components/Showcase" 
import Showcase2 from "../components/Showcase2"


function Home() {
  const { games } = useContext(GamesContext)

  return (
    <>
      
      <Showcase />
      <Showcase2 />

      <h2 className={styles.title3}> The Games </h2>
  
      <Container>
        <Row xs={1} sm={2} md={5} className="g-4 mt-4">
          {games.map(game => (
            <GameCard  game={game} />
          ))}
        </Row>
      </Container>

      

    </>
  )
}

export default Home
