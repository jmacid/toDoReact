import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #333;
  height: 10vh;
  display: flex;
  top: 0;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
  margin: 0 40px;
`;

export const NavLogo = styled.div`
`;

export const NavIcon = styled(Link)`
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  font-size: 2rem;
  
  &:hover {
    color: #ccc;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavItem = styled.li`
  list-style: none;
  margin-left: 25px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.25rem;
  
  &:hover {
    color: #ccc;
  }
`;

