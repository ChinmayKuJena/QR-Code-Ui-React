import { useState } from "react";
import GenerateQR from "./GenerateQR";
import ScanQR from "./ScanQR";

function HomeScreen() {
  const [selectedPage, setSelectedPage] = useState<string>("home");

  // Navigation items array
  const navItems = [
    { label: "Home", page: "home" },
    { label: "Generate QR Code", page: "generate" },
    { label: "Scan QR Code", page: "scan" },
  ];
  // Render different components based on the selected page
  const renderPage = () => {
    switch (selectedPage) {
      case "generate":
        return <GenerateQR />;
      case "scan":
        // return "To be Implemented";
        return <ScanQR />;
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
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <button
                className={`nav-link text-white ${
                  selectedPage === item.page ? "active" : ""
                }`}
                onClick={() => setSelectedPage(item.page)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1 p-5">{renderPage()}</div>
    </div>
  );
}

export default HomeScreen;
