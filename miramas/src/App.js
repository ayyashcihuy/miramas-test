import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Location from "./components/Location";


function App() {
  return (
    <div className="bg-slate-50 w-full min-h-screen">
      <Sidebar />
      <Navbar />
      <div className="flex flex-row overflow-hidden ml-20">
        <div className="basis-1/3">
        <Profile />
        </div>
        <div className="basis-2/3 mr-6">
        <Location/>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default App;
