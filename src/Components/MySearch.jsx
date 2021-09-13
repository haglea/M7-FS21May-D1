import { Button, Col, Form, Row } from "react-bootstrap"
import "./MySearch.css"

const MySearch = () => (

            <Form>
                <Row className="justify-content-md-center">
                  <Col sm={4}>
                      <Form.Control placeholder="What job are you looking for?" />
                    </Col>
                    <Col md="auto">
                      <Button variant="outline-success" >Search</Button>
                  </Col>
                </Row>
            </Form>

)


export default MySearch;