import React, { useState } from 'react'
import { Segment, Header, Form, Button } from 'semantic-ui-react'
import cuid from 'cuid'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateEvent, createEvent } from '../eventActions'

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch()

  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  )
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
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: 'Ankit',
            attendees: [],
            hostPhotoURL: '/assets/user.png',
          })
        )
    history.push('/events')
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
          as={Link}
          to={'/events'}
          type="submit"
          floated="right"
          content="Cancle"
        />
      </Form>
    </Segment>
  )
}

export default EventForm
