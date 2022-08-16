import Menu from './Menu';
import './App.css';

import Login from './Login';

import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Menu />
    
      <Routes>
      
        <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      
      </Routes>

    </>

  );
}

export default App;
