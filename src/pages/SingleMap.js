import React from 'react'
import { Link } from 'react-router-dom'

import Canvas from '../components/canvas'

const SingleMap = ({maps, match, deleteMap}) => {
    const id = parseInt(match.params.id)
    const map = maps.find((map) => map.id === id)

    const style = {
        margin: "1em"
    }
    const options = {
        display: "flex",
        justifyContent: "space-evenly",
        margin: "0 15%"
    }

    return (
        <div style={style}>
            <Canvas map={map} size="400"/>
            <h2>Map #{map.id}</h2>
            <h3>Size: {map.rows} * {map.columns}</h3>
            <h4>Layout: {map.layout}</h4>
            <div style={options}>
                <Link to="/">
                    <button>Back</button>
                </Link>
                <Link to={`/edit/${map.id}/`}>
                    <button>Edit</button>
                </Link>
                <button onClick={() => deleteMap(map)}>Delete</button>
            </div>
        </div>
    )
}

export default SingleMap