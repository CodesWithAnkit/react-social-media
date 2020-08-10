import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import { sampleData } from '../../../app/api/sampleData'

const EventDashboard = () => {
  const [events, setEvents] = useState(sampleData)

  // const handleCreateEvent = (event) => {
  //   setEvents([...events, event])
  // }

  // const handleUpadateEvent = (updatedEvent) => {
  //   setEvents(
  //     events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
  //   )
  //   selectEvent(null)
  // }

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((evt) => evt.id !== id))
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filter</h2>
      </Grid.Column>
    </Grid>
  )
}

export default EventDashboard
