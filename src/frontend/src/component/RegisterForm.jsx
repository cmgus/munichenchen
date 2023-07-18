import { Button, Form } from "react-bootstrap"

export const RegisterForm = () => {
  return (
    <Form>
      <div className="mb-3">
        <Form.Label htmlFor="names">Nombres y Apellidos:</Form.Label>
        <Form.Control placeholder="Nombres y Apellidos" id="register_names" />
      </div>
      <div className="mb-3">
        <Form.Label htmlFor="dni">D.N.I.:</Form.Label>
        <Form.Control placeholder="D.N.I." id="register_dni" />
      </div>
      <div className="mb-3">
        <Form.Label htmlFor="dni">Contraseña:</Form.Label>
        <Form.Control placeholder="Contraseña" id="register_password" type="password" />
      </div>
      <div className="mb-3">
        <Form.Label htmlFor="dni">Confirmar contraseña:</Form.Label>
        <Form.Control placeholder="Confirmar Contraseña" id="register_confirm_password" type="password" />
      </div>
      <div className="d-grid gap-2">
        <Button>Registrar</Button>
      </div>
    </Form>
  )
}