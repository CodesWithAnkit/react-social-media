import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = ({ setAuthenticated }) => {
  return (
    <Menu.Item position="right">
      <Button
        basic
        inverted
        content="login"
        onClick={() => setAuthenticated(true)}
      />
      <Button
        basic
        inverted
        content="Registed"
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  )
}

export default SignedOutMenu
