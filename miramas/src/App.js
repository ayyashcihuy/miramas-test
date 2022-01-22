import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-slate-50 w-full h-screen'>
      </div>
    </div>
  );
}

export default App;
