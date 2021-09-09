import React from 'react'
import { Link } from 'react-router-dom'
import Canvas from './canvas'

const Map = ({map}) => {

    const style={
        display:"flex",
        justifyContent:"space-between",
        alignItems: "center",
        margin: "2em 20%"
    }

    return (
        <Link to={`/map/${map.id}`}>
            <div style={style}>
                <Canvas map={map} size="200"/>
                <h1>Map #{map.id}</h1>
            </div>
        </Link>
    )
}

export default Map