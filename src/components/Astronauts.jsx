import React from 'react'
import { useState, useEffect } from 'react'

export default function Astronauts() {

  const [list, setList] = useState([])
  const [totalPeople, setTotalPeople] = useState(0)
  const [lastUpdate, setLastUpdate] = useState("")

  function getAstronauts() {
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((data) => {
        setList(data)
        setTotalPeople(data.number)
        setLastUpdate(new Date().toLocaleString())
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    getAstronauts()
  }, [])

  return (
    <div className='border'>
      <p>There are currently {totalPeople} astronauts in space:</p>
      {list.people ? list.people.map((astronaut, index) => {
        return <div className='astro-names' key={index}>{astronaut.name}</div>
      }) : <p>No astronauts yet</p>}
      <h5 className='h5-tags'>Updated: {lastUpdate}</h5> 
    </div>
  )
}
