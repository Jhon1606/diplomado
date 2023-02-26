import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cursos from './pages/Cursos'
import Profesores from './pages/Profesores'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Cursos">Cursos</Link></li>
              <li><Link to="/Profesores">Profesores</Link></li>
              <li><Link to="/Profile">Profile</Link></li>
            </ul>
          </div>
          <Routes>
            <Route path="/Cursos" element={<Cursos />}/>
            <Route path="/Profesores" element={<Profesores />}/>
            <Route path="/Profile/:name" element={<Profile />}/> {/*React-router-dom dinamico */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
