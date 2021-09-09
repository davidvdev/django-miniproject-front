import React from 'react'
import Map from '../components/map'

const Maps = ({ maps }) => {
    return maps.map(map => <Map map={map} key={map.id}/>)
}

export default Maps