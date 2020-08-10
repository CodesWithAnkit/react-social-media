import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from '../eventForm/EventForm'
import { sampleData } from '../../../app/api/sampleData'

const EventDashboard = ({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) => {
  const [events, setEvents] = useState(sampleData)

  const handleCreateEvent = (event) => {
    setEvents([...events, event])
  }

  const handleUpadateEvent = (updatedEvent) => {
    setEvents(
      events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    )
    selectEvent(null)
  }

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((evt) => evt.id !== id))
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          deleteEvent={handleDeleteEvent}
          selectEvent={selectEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            createEvent={handleCreateEvent}
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            selectedEvent={selectedEvent}
            updateEvent={handleUpadateEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  )
}

export default EventDashboard
