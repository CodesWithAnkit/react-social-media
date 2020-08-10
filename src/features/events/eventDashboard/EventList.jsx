import React from 'react'
import EventListItem from './EventListItem'

const EventList = ({ deleteEvent, events, selectEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  )
}

export default EventList
