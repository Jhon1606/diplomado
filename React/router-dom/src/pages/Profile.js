import React from 'react'
import {useParams} from 'react-router-dom'

function Profile() {
    const {name} = useParams();
    console.log(name)
  return (
    <div>Desde profile, con el nombre de {name}</div>
  )
}

export default Profile