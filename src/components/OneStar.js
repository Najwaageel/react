import { useContext } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { toast } from "react-toastify" // حذف
import "react-toastify/dist/ReactToastify.css"
import GamesContext from "../utils/GameContext"


function OneStar(props) {
  const { fill, setFill, starNumber, gameId, setShow } = props
  const { addRating } = useContext(GamesContext)


  return fill >= starNumber ? (
    <AiFillStar
      size="25"
      onMouseOver={() => setFill(starNumber)}
      onClick={() => {
        if (localStorage.token) addRating(gameId, starNumber)
        else toast.error("please login first")
        setShow(false)
      }}
    />
  ) : (
    <AiOutlineStar  size="25" onMouseOver={() => setFill(starNumber)} />
  )
}

export default OneStar