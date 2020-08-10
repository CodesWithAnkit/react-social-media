import React from 'react'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar'
import { Container } from 'semantic-ui-react'
import HomePage from '../../features/home/HomePage'
import EventDetailedPage from '../../features/events/eventDetails/EventDetailedPage'
import EventForm from '../../features/events/eventForm/EventForm'
import { Route } from 'react-router-dom'

function App() {
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
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </>
  )
}

export default App
