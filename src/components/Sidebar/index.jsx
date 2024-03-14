import { NavLink } from "react-router-dom"

function SidebarComponent() {

  return (
    <div className="sidebar">
      <nav style={{ 'display': 'flex', 'flexDirection': 'column' }}>
        <NavLink>Home</NavLink>
        <NavLink>Test</NavLink>
        <NavLink>Test</NavLink>
        <NavLink>Test</NavLink>
      </nav>
    </div>
  )
}

export default SidebarComponent;