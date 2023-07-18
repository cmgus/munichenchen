import { Container, Button } from "react-bootstrap";
import LandingHeader from "./LandingHeader";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <Container>
      <LandingHeader />
      <main>
        <Button variant="dark" as={Link} to="attendance">
          Asistencia
        </Button>
      </main>
    </Container>
  );
};
