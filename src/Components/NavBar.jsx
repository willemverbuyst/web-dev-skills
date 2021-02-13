import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar() {
  return (
    <Header>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/skills">SKILLS</NavLink>
      <NavLink to="/schooldashboard">SCHOOL DASHBOARD</NavLink>
      <NavLink to="/hexagongenerator">HEXAGON GENERATOR</NavLink>
    </Header>
  )
}

const Header = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  height: 5rem;
  background-color: transparent;
  z-index: 1000;
`

const NavLink = styled(Link) `
  color: #fff;
  padding: 1rem;
  text-decoration: none;
`