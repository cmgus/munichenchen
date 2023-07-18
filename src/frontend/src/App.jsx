import { useState } from "react";
import { Container } from "react-bootstrap";
import LandingHeader from "./component/LandingHeader";
import './App.scss'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <LandingHeader />
        <button className="btn btn-primary">Button</button>
      </Container>
    </>
  );
}

export default App;
