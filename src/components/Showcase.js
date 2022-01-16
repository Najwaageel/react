import styles from "./Showcase.module.css"
import video from "../images/video3.MP4"

function Showcase() {
  return (
    <>
        <video
          className={styles.video}
          src={video}
          autoPlay
          muted
          loop
        /> 
    </>
  )
}
export default Showcase

