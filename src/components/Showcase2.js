import { Card, Col, Row } from "react-bootstrap"
// import image from "../images/images.jpg"
import image from "../images/bbb.jpg"
import styles from "../components/mystyle.module.css"

function Showcase2() {
  return (
    <>
      <Row style={{marginTop:-6}}>
        <Col
          style={{
            backgroundImage: `url("${image}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 750,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            opacity: 80,
          }}
        >
          <Card
            style={{
              backgroundColor: "rgba(195, 183, 197, 0.712)",
              borderRadius: "60px",
              height: 600,
              width: 1000,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "15%",
            }}
          >
            <h1 className={styles.title}> DEZNY PARK </h1>
            <p className={styles.title3}> Disney theme park is the perfect place for the family to spend the most beautiful times, whether it is
            riding exciting games such as the new Noble or roller coaster or enjoying ice skating or boating around the
            lake. </p>
            <p className={styles.title3}>  The best place for joy and fun with family and friends. </p>
            {/* <p className={styles.title3}> * 2 minutes and 45 seconds is the duration of the one-passenger bumper car game....if you
              Lucky and there is no traffic that may extend this period </p> */}
            
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Showcase2
