import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar,Nav } from 'react-bootstrap'

export default class Navigation extends Component {
  render() {
    return (
     <Navbar bg="primary" expand="lg">
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Nav>
           <NavLink   className="d-inline p-2 bg-primary text-white" to="/dashboard">Dashboard</NavLink>
             <NavLink className="d-inline p-2 bg-primary text-white"
            to="/department">Department</NavLink>
             <NavLink className="d-inline p-2 bg-primary text-white"
            to="/stocks">Stocks</NavLink>
        </Nav>
     </Navbar>
    )
  }
}
