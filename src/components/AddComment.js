import { useContext } from "react"
import { Col, Form, Button, Row } from "react-bootstrap"
import GamesContext from "../utils/GameContext"

function AddComment(props) {
  const { addComment } = useContext(GamesContext)
  const { gameId } = props

  return (
    <div className="ms-5">
      <Form className="mt-5 mb-5" onSubmit={e => addComment(e, gameId)}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2"></Form.Label>
          <Col md="6">
            <Form.Control as="textarea" name="comment" placeholder=" Add Your Comments ..." required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button variant="outline-info" type="submit">
              {" "}
              Add Comment{" "}
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddComment
