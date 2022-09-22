import './App.css';
import './styles/main.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/profile' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
