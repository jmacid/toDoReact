import React from 'react'

import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        
        <NavLogo>
          <NavIcon to="/">#ToDo</NavIcon>
        </NavLogo>
        
        <NavMenu>
          <NavItem>
            <NavLink to="saraza">Saraza</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="about">About</NavLink>
          </NavItem>          
        </NavMenu>
        
      </NavContainer>
    </Nav>
  )
}

export default Navbar;