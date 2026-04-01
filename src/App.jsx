import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import "./styles/App.css";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [selectedDay, setSelectedDay] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className={`app ${theme}`} data-theme={theme}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenSidebar={() => setSidebarOpen(true)}
      />
      <div className="app-body">
        <Sidebar
          selectedDay={selectedDay}
          onDaySelect={(d) => {
            setSelectedDay(d);
            setSidebarOpen(false);
          }}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        {sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <MainContent selectedDay={selectedDay} />
      </div>
    </div>
  );
}
