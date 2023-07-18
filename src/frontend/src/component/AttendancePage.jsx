import { useState } from "react";
import { Button, Container, FormSelect } from "react-bootstrap";
export const AttendancePage = () => {
  const [result, setResult] = useState("nonr");
  const [devices, setDevices] = useState([]);

  return (
    <Container>
      <header className="attendance-page__header">
        <h2>Asistencia</h2>
      </header>
      <Button size="sm">Abrir camara</Button>
      <Button onClick={stopVideo}>Detener camara</Button>
      <div className="d-flex justify-content-center">
        <video
          id="video"
          width="300"
          height="300"
          style={{ border: "1px solid gray" }}
        ></video>
      </div>
      <FormSelect>
        {devices.map((d) => (
          <option value="s" key={d.label}>
            {d.label} - {d.id} - {d.kind}
          </option>
        ))}
      </FormSelect>
      <p>{result}</p>
    </Container>
  );
};
