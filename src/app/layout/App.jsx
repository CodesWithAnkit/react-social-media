import React from 'react'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar'
import { Container } from 'semantic-ui-react'
import HomePage from '../../features/home/HomePage'
import EventDetailedPage from '../../features/events/eventDetails/EventDetailedPage'
import EventForm from '../../features/events/eventForm/EventForm'
import { Route, useLocation } from 'react-router-dom'
import Sandbox from '../../features/sandbox/Sandbox'

function App() {
  const { key } = useLocation()
  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route path="/events" exact component={EventDashboard} />
              <Route path="/sandbox" exact component={Sandbox} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  )
}

export default App
