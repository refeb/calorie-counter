import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 0.5em;
`
const ListItem = styled.li`
  display: flex;
`
const StyledLink = styled(NavLink)`
  text-align: center;
  color: #616161;
  padding: 1em 1.5em;
  text-decoration: none;
  transition: color 250ms ease, border 100ms ease;
  border-bottom: 3px solid transparent;
  :hover {
    color: #9e9e9e;
    border-bottom: 3px solid #9e9e9e;
  }
  &.${(props) => props.activeClassName} {
    color: black;
    border-bottom: 3px solid black;
  }
`
export function MenuItem ({ to, exact, ...props }) {
  return (
    <ListItem>
      <StyledLink to={to} activeClassName='active-link' exact={exact}>
        {props.children}
      </StyledLink>
    </ListItem>
  )
}
