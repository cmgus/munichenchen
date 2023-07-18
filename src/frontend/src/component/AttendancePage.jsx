import { useEffect, useRef, useState } from "react";
import { Button, Container, Form, FormSelect } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { BrowserQRCodeReader } from '@zxing/browser'
import 'https://unpkg.com/@zxing/library@latest'
let codeReader = new BrowserQRCodeReader()
export const AttendancePage = () => {
  let codeReaderControl = null
  const [result, setResult] = useState("");
  const [devices, setDevices] = useState([]);
  const [currentDeviceId, setCurrentDeviceId] = ""
  const videoRef = useRef()
  const navigate = useNavigate()
  useEffect(() => {
    BrowserQRCodeReader.listVideoInputDevices()
      .then((videoInputDevices) => {
        setDevices(videoInputDevices)
        setCurrentDeviceId(videoInputDevices[0].deviceId)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  const start = async () => {
    codeReaderControl = await codeReader.decodeOnceFromVideoDevice(currentDeviceId, 'video')//.then((result) => {
    setResult(codeReaderControl.getText())
  }
  const stop = () => {
    // codeReaderControl.stop()
    videoRef.srcObject.getTracks()[0].stop()
  }
  const attendance = () => {
    setResult(videoRef.current.srcObject)
    videoRef.current.srcObject.getTracks()[0].stop()
    navigate('/', { replace: true })
  }
  return (
    <Container>
      <header className="attendance-page__header">
        <h2>Asistencia</h2>
      </header>
      <Button size="sm" onClick={start}>Abrir camara</Button>
      <Button size="sm" onClick={stop}>Detener camara</Button>
      <pre><code>{JSON.stringify(result, null, 2)}</code></pre>
      <div className="d-flex justify-content-center">
        <video
          id="video"
          width="300"
          height="300"
          ref={videoRef}
          style={{ border: "1px solid gray" }}
        ></video>
      </div>
      <FormSelect>
        {
          devices.map(d => (<option value={d.deviceId} key={d.deviceId}>{d.label}</option>))
        }

      </FormSelect>
      {
        result !== '' && <Button onClick={attendance}>Asistir</Button>
      }
      {/* <Button as={Link} to="/">Asistir</Button> */}
      <p>{result}</p>
    </Container>
  );
};
