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
            <input 
                type="number"
                min="1"
                max="9"
                name="rows"
                value={formData.rows}
                onChange={handleChange}
            />
            <input 
                type="number"
                min="1"
                max="9"
                name="columns"
                value={formData.columns}
                onChange={handleChange}
            />
            <input type="submit" name="submit" value="Generate Map"/>
        </form>
    )
}

export default Form