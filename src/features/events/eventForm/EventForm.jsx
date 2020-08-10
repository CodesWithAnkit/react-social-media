import React, { useState } from 'react'
import { Segment, Header, Form, Button } from 'semantic-ui-react'
import cuid from 'cuid'

const EventForm = ({
  updateEvent,
  createEvent,
  setFormOpen,
  setEvents,
  selectedEvent,
}) => {
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }

  const [values, setValues] = useState(initialValues)

  const handleFormSubmit = (e) => {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: 'Ankit',
          attendees: [],
          hostPhotoURL: '/assets/user.png',
        })
    setFormOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const { title, description, category, date, venue, city } = values
  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event' : 'create new event'} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            name="title"
            value={title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            value={venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          onClick={() => {
            setFormOpen(false)
          }}
          type="submit"
          floated="right"
          content="Cancle"
        />
      </Form>
    </Segment>
  )
}

export default EventForm
