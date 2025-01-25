// src/ScanQR.tsx

const ScanQR = () => {
  // Placeholder for QR scan functionality (you can integrate a real QR scanner later)
  const handleScan = () => {
    alert("QR Code Scanned!");
  };

  return (
    <div>
      <h4>Scan QR Code</h4>
      <button onClick={handleScan} className="btn btn-success">
        Scan QR Code
      </button>
    </div>
  );
};

export default ScanQR;
