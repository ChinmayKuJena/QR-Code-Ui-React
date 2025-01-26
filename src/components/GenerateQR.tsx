import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";

const GenerateQR = () => {
  const [inputText, setInputText] = useState<string>("");
  const [qrValue, setQrValue] = useState<string>("");
  const svgRef = useRef<SVGSVGElement | null>(null);

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

  // Function to download the QR code
  const downloadQRCode = () => {
    if (svgRef.current) {
      const svg = svgRef.current;
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      // Set canvas dimensions
      canvas.width = 256;
      canvas.height = 256;

      // Convert SVG to a data URL
      img.onload = () => {
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const pngFile = canvas.toDataURL("image/png");

          // Create a link to download the image
          const downloadLink = document.createElement("a");
          downloadLink.href = pngFile;
          downloadLink.download = "qr-code.png";
          downloadLink.click();
        }
      };
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
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
          <QRCode
            value={qrValue}
            size={256}
            fgColor="#000000"
            bgColor="#ffffff"
            ref={svgRef}
          />
          <button onClick={downloadQRCode} className="btn btn-success mt-3">
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default GenerateQR;
