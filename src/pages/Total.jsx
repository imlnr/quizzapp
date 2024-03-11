import React from 'react'
import { useLocation } from 'react-router-dom'

const Total = () => {
    const location = useLocation();
    // const {props} = location.state;
  return (
    <div>{`You got total of ${location.props} scores`}</div>
  )
}

export default Total