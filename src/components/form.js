import React, { useState } from 'react'

const Form = ({nullMap, handleSubmit}) => {
    const [formData, setFormData] = useState(nullMap)

    const handleChange = (event) => {
         setFormData({...formData, [event.target.name]: Number(event.target.value)})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        setFormData(nullMap) 
    }

    return (
        <form onSubmit={handleSubmission}>
            <label htmlFor="rows">Rows: </label>
            <input 
                type="number"
                min="1"
                max="9"
                name="rows"
                value={formData.rows}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="columns">Columns: </label>
            <input 
                type="number"
                min="1"
                max="9"
                name="columns"
                value={formData.columns}
                onChange={handleChange}
            />
            <br />
            <input className="button" type="submit" name="submit" value="Generate Map"/>
        </form>
    )
}

export default Form