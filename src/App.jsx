import { useState } from "react";
import QRCode from "qrcode";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [qrcode, setQrcode] = useState('');

  const generateQRCode = () => {
    QRCode.toDataURL(inputValue)
      .then(inputValue => {
        console.log(inputValue);
        setQrcode(inputValue);
      })
      .catch(err => {
        console.error(err);
        alert('Error generating QR code');
      });
  }

  return (
    <>
      <h1>QRify </h1>
      
      <input 
        type="text" 
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
        placeholder="Enter Something"
      />
      <button onClick={generateQRCode}>Generate</button>
      {qrcode && <img src={qrcode} alt="QR Code" />}
    </>
  );
}

export default App;
