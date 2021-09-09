import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Canvas from '../components/canvas'

const AddDetails = ({maps, match, history, handleSubmit, deleteMap}) => {
    const id = parseInt(match.params.id)
    const map = maps.find((map) => map.id === id)

    const [formData, setFormData] = useState(map)

    const handleChange = (event) => {
         setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        history.push(`/map/${map.id}`)
    }

    const style = {
        margin: "1em"
    }
    const options = {
        display: "flex",
        justifyContent: "space-evenly",
        margin: "1em 15%"
    }

    const form = {
        margin: "2em",
    }

    return (
        <div style={style}>
            <Canvas map={map} size="400"/>
            <h2>Map #{map.id}</h2>
            <h3>Size: {map.rows} * {map.columns}</h3>
            <form onSubmit={handleSubmission} style={form}>
                <label htmlFor="layout">Layout: </label>
                <input 
                    type="text"
                    name="layout"
                    value={formData.layout}
                    onChange={handleChange}
                />
                <input className="button" type="submit" value="save changes"/>
            </form>
            <div style={options}>
                <Link to={`/map/${map.id}`}>
                    <button>Back</button>
                </Link>
                    <button onClick={()=>deleteMap(map)}>Delete</button>
            </div>
        </div>
    )
}

export default AddDetails