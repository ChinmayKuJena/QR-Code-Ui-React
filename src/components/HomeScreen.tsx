import { useState } from "react";
import GenerateQR from "./GenerateQR";
import ScanQR from "./ScanQR";

function HomeScreen() {
  const [selectedPage, setSelectedPage] = useState<string>("home");

  // Render different components based on the selected page
  const renderPage = () => {
    switch (selectedPage) {
      case "generate":
        return <GenerateQR />;
      case "scan":
        return "To be Implemented";
        // return <ScanQR />;
      default:
        return <div>Home Page</div>;
    }
  };
  return (
    <div className="d-flex">
      {/* Side Navigation */}
      <div
        className="bg-dark text-white"
        style={{ width: "250px", height: "100vh" }}
      >
        <h3 className="p-3">QR Code App</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <button
              className="nav-link text-white"
              onClick={() => setSelectedPage("home")}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link text-white"
              onClick={() => setSelectedPage("generate")}
            >
              Generate QR Code
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link text-white"
              onClick={() => setSelectedPage("scan")}
            >
              Scan QR Code
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1 p-5">{renderPage()}</div>
    </div>
  );
}

export default HomeScreen;
