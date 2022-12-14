import { Link, NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/about",
    title: "About"
  },
  {
    to: "/dashboard",
    title: "Dashboard"
  },
  {
    to: "/signup",
    title: "Signup"
  },
  {
    to: "/login",
    title: "Login"
  },
  {
    to: "/addnew",
    title: "Addnew"
  }
];

// NavLinks
const baseStyle = {
  color: "black",
  textDecoration: "none"
};

const activeStyle = {
  color: "red",
  textDecoration: "none"
};

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop:"20px", marginBottom:"20px" }}>
      {links.map((item) => (
        
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.to}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
