import { NavLink } from "react-router-dom"

function SidebarComponent() {

  return (
    <div className="sidebar">
      <nav style={{ 'display': 'flex', 'flexDirection': 'column' }}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/pharmacies">Pharmacies</NavLink>
        <NavLink to="/medicines">Medicines</NavLink>
      </nav>
    </div>
  )
}

export default SidebarComponent;