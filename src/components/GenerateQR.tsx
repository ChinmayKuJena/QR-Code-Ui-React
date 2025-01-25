// src/GenerateQR.tsx

import React, { useState } from "react";
import QRCode from "react-qr-code"; // Correct import for react-qr-code

const GenerateQR = () => {
  const [inputText, setInputText] = useState<string>("");
  const [qrValue, setQrValue] = useState<string>("");

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  // Function to generate QR code
  const generateQRCode = () => {
    if (inputText.trim()) {
      setQrValue(inputText);
    } else {
      alert("Please enter some text or URL!");
    }
  };

  return (
    <div>
      <h4>Generate QR Code</h4>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text or URL"
        className="form-control mb-3"
      />
      <button onClick={generateQRCode} className="btn btn-primary">
        Generate QR Code
      </button>

      {/* Display the QR Code if qrValue is not empty */}
      {qrValue && (
        <div className="mt-4">
          <h5>Your QR Code:</h5>
          <QRCode value={qrValue} size={256} fgColor="#000000" bgColor="#ffffff" />
        </div>
      )}
    </div>
  );
};

export default GenerateQR;
