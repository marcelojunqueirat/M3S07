import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import RoutesComponent from './routes/Routes'
import HeaderComponent from './components/Header'
import SidebarComponent from './components/Sidebar'

function App() {

  return (
    <>
      <Router>
        <div className="grid-container">
          <HeaderComponent />
          <SidebarComponent />
          <RoutesComponent />
        </div>
      </Router>
    </>
  )
}

export default App
