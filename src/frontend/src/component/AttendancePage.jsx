import { useState } from "react";
import { Button, Container, FormSelect } from "react-bootstrap";
import { BrowserQRCodeReader } from "@zxing/library";
export const AttendancePage = () => {
  const [result, setResult] = useState("nonr");
  let codeReader = new BrowserQRCodeReader();
  let stop = null;
  const [devices, setDevices] = useState([]);

  useState(() => {
    navigator.mediaDevices
      ?.getUserMedia({ audio: false, video: { facing: "environment" } })
      .then((d) => console.log(d))
      .catch((er) => console.log(er));
  }, []);
  const decodeOnce = (selectedDeviceId) => {
    if (!codeReader) return;
    codeReader
      .decodeFromInputVideoDevice(selectedDeviceId, "video")
      .then((result) => {
        console.log(result);
        setResult(result.text);
        // document.getElementById("result").textContent = result.text;
      })
      .catch((err) => {
        console.error(err);
        setResult(err);
        // document.getElementById("result").textContent = err;
      });
  };
  const stopVideo = () => {
    stop.stop();
  };
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
