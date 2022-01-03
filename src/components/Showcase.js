import styles from "./Showcase.module.css"
// import video from "../images/video2.MP4"
import video from "../images/video3.MP4"

function Showcase() {
  return (
    <>
      {/* <div style={{ display: "grid", gridAutoColumns: "1fr 1fr" }}> */}
        <video
          className={styles.video}
          src={video}
          autoPlay
          muted
          loop
          // style={{ width: "100%", position: "absolute", zIndex: "-1" }}
        />
        {/* <div /> */}
        {/* <div /> */}
        {/* <div style={{ position: "absolute", zIndex: "0", left: "50px", top: "300px" }}></div> */}
      {/* </div> */}
    </>
  )
}
export default Showcase

// import { Col, Form, Row, Button } from "react-bootstrap"
// import video from "../images/video2.MP4"
// import styles from "./Showcase.module.css"
// import NavbarItem from "../components/Navbar"

// function Showcase() {
//   return (
//     <div>

//       <Row className="showcase">
//         <video className={styles.video} src={video} autoPlay muted loop />
//         <div className={styles.text}>
//           <h1> Welcome ... </h1>
//         </div>
//       </Row>
//     </div>
//   )
// }

// export default Showcase
