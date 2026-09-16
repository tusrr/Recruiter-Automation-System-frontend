import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState} from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import './App.css';

function App() {

  const [recruiters, setRecruiters] = useState([]);

  return (
    <BrowserRouter>

      <nav className="navbar app-navbar">
        <div className="container is-fluid">

          <div className="navbar-brand">

            <Link to="/" className="navbar-item brand-name">
              Recruiter<span>Flow</span>
            </Link>

          </div>

          <div className="navbar-menu is-active">

            <div className="navbar-end">

              <Link to="/" className="navbar-item">
                Home
              </Link>

              <Link to="/dashboard" className="navbar-item">
                Dashboard
              </Link>

            </div>

          </div>

        </div>
      </nav>

      <Routes>

        <Route
          path="/"
          element={
            <Home recruiters={recruiters} />
          }
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              recruiters={recruiters}
              setRecruiters={setRecruiters}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;