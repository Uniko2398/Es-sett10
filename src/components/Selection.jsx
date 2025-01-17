/* eslint-disable react/prop-types */
import { Container, Form, Row, Col } from "react-bootstrap";

const Selection = ({ setLocation }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Form.Label>Destinazione</Form.Label>
          <Form.Select
            aria-label="Seleziona una città"
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Scegli la tua destinazione</option>
            <option value="milan">Milan</option>
            <option value="london">London</option>
            <option value="madrid">Madrid</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
};

export default Selection;
