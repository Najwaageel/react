import { useContext } from "react"
import { Form, Col, Row, Button, Modal } from "react-bootstrap"
import GamesContext from "../utils/GameContext"
import signandlog from "./signandlog.module.css" // ستايل

function Login(props) {
  const { login } = useContext(GamesContext)
  const { loginshow, handleCloseLogin } = props

  return (
    <div>
      <Modal show={loginshow} onHide={handleCloseLogin}>
        <Form
          className={signandlog.back}
          onSubmit={e => {
            login(e)
            handleCloseLogin()
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title className={signandlog.signup}> Log in </Modal.Title>
          </Modal.Header>
          <Modal.Body className={signandlog.signup1}>
            <Form.Group as={Row} className="mb-3">
              <Col md="10">
                <Form.Control type="email" name="email" placeholder=" Type Your Email ... " required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col md="10">
                <Form.Control type="password" name="password" placeholder=" Type Your Password ... " required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-info" type="submit">
              Log in
            </Button>
            <Button onClick={handleCloseLogin} variant="outline-secondary">
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default Login
