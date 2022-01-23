import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="">
      <Sidebar />
      <Navbar />
      <div className="">
        <Profile />
      </div>
      <div className="bg-slate-50 w-full h-screen"></div>
    </div>
  );
}

export default App;
