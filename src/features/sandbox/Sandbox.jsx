import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { increment, decrement } from './testReducer'

const Sandbox = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  return (
    <>
      <h1>Testing</h1>
      <h3>The data is: {data}</h3>
      <Button
        onClick={() => dispatch(increment(10))}
        content="Increment"
        color="green"
      />
      <Button
        onClick={() => dispatch(decrement(5))}
        content="Decrement"
        color="red"
      />
    </>
  )
}

export default Sandbox
