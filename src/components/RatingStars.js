import { useState } from "react"
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import { AiFillStar } from "react-icons/ai" // ايقونات
import OneStar from "./OneStar"


function RatingStars(props) {
  const { gameId } = props
  const [show, setShow] = useState(false)
  const [fill, setFill] = useState(0)


  return (
    <OverlayTrigger  
      placement="bottom"
      overlay={
        <Tooltip style={{ color:"rgba(95, 181, 184, 0.909)" }}>
          <div style={{ border:0 , padding: 15, backgroundColor:"rgba(95, 181, 184, 0.909)" }} onMouseLeave={() => setFill(0)}>
            <OneStar fill={fill} setFill={setFill} starNumber={1} gameId={gameId} setShow={setShow} />
            <OneStar fill={fill} setFill={setFill} starNumber={2} gameId={gameId} setShow={setShow} />
            <OneStar fill={fill} setFill={setFill} starNumber={3} gameId={gameId} setShow={setShow} />
            <OneStar fill={fill} setFill={setFill} starNumber={4} gameId={gameId} setShow={setShow} />
            <OneStar fill={fill} setFill={setFill} starNumber={5} gameId={gameId} setShow={setShow} />
          </div>
        </Tooltip>
      }
      show={show}
    >
      <Button style={{ borderRadius: "50px" }} variant="light" onClick={() => setShow(!show)}>
        <AiFillStar />
      </Button>
    </OverlayTrigger>
  )
}

export default RatingStars
