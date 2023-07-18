import { Container, Tabs, Tab } from "react-bootstrap";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
export const LoginPage = () => {
  return (
    <Container>
      <br />
      <Tabs
        defaultActiveKey="login"
        className="mb-3"
        fill
      >
        <Tab eventKey="login" title="Iniciar Sesión">
          <LoginForm />
        </Tab>
        <Tab eventKey="register" title="Registrarse">
          <RegisterForm />
        </Tab>
      </Tabs>
    </Container>
  );
};
