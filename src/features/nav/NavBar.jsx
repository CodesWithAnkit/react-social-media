import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import SignedOutMenu from './SignedOutMenu'
import SignedInMenu from './SignedInMenu'

const NavBar = ({ setFormOpen }) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: '15px' }}
          />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/events" name="Events" />
        <Menu.Item as={NavLink} to="/createEvent">
          <Button positive inverted content="Create Event" />
        </Menu.Item>
        <SignedOutMenu />
        <SignedInMenu />
      </Container>
    </Menu>
  )
}

export default NavBar
