
import './App.css';
import Task from './Task';
import User from './User';
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Task/>} />
          <Route path="/User" element={<User/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
