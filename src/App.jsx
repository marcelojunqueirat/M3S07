import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RoutesComponent from './routes/Routes';
import HeaderComponent from './components/Header';
import SidebarComponent from './components/Sidebar';
import { useAuth } from './context/AuthContext.jsx';

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <Router>
        {isAuthenticated ? (
          <div className="grid-container">
            <HeaderComponent />
            <SidebarComponent />
            <div className="content">
              <RoutesComponent />
            </div>
          </div>
        ) : (
          <RoutesComponent />
        )}
      </Router>
    </>
  )
}

export default App
