import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const LoginForm = () => {
  return (
    <Form>
      <div className="mb-3">
        <Form.Label htmlFor="dni">D.N.I.:</Form.Label>
        <Form.Control placeholder="D.N.I." id="login_dni" />
      </div>
      <div className="mb-3">
        <Form.Label htmlFor="password" >Contraseña:</Form.Label>
        <Form.Control placeholder="Contraseña" type="password" id="login_password" />
      </div>
      <div className="d-grid gap-2">
        <Button as={Link} to="/attendance">Ingresar</Button>
      </div>
    </Form>
  );
};
