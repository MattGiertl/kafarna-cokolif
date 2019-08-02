import React from "react"
import { Link } from "gatsby"

const NavLink = ({ text, to, color }) => (
  <Link
    style={{ textDecoration: "none", color: color, cursor: "pointer" }}
    to={to}
  >
    {text}
  </Link>
)

export default NavLink
