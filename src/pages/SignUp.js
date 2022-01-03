import { useContext } from "react"
import { Form, Col, Row, Button, Modal } from "react-bootstrap"
import GamesContext from "../utils/GameContext"
import signandlog from "./signandlog.module.css" // الستايل

function SignUp(props) {
  const { signup } = useContext(GamesContext)
  const { signupshow, handleCloseSignup, handleOpenLogin } = props

  return (
    <>
      <div style={{ borderRadius: "10%" }} >
        <Modal show={signupshow} onHide={handleCloseSignup}>
          <Form
            className={signandlog.log}
            onSubmit={e => {
              signup(e)
              handleCloseSignup()
              handleOpenLogin()
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title className={signandlog.signup}> Sign up</Modal.Title>
            </Modal.Header>
            <Modal.Body className={signandlog.signup1}>
              <Form.Group as={Row} className="mb-3">
                
                <Col md="10">
                  <Form.Control type="text" name="firstName" placeholder=" Type Your First Name ... " required />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                
                <Col md="10">
                  <Form.Control type="text" name="lastName" placeholder=" Type Your Last Name ... " required />
                </Col>
              </Form.Group>
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
              <Form.Group as={Row} className="mb-3">
                
                <Col md="10">
                  <Form.Control type="url" name="avatar" placeholder=" Put Your Avatar ... " required  />
                </Col>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-info" type="submit">
                Sign up
              </Button>
              <Button onClick={handleCloseSignup} variant="outline-secondary">
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  )
}

export default SignUp
