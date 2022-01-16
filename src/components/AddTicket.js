import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import GamesContext from "../utils/GameContext"
import styles from "./mystyle.module.css"


function AddTicket(props) {
  const { addTicket } = useContext(GamesContext)
  const { handleClose, gameId , show} = props

  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Form  className={styles.mod} onSubmit={(e) => addTicket(e, gameId)}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.title1}> Ticket Booking </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Col md="8">
              <Row>
                <Col>
                  <Form.Control  type="date" name="date" />
                </Col>
              </Row>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{ marginRight:200 }} type="submit"  onClick={handleClose}>
            Reservation
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
    </>
  )
}

export default AddTicket
