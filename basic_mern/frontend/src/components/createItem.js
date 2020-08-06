import React, { useState } from 'react'

import Layout from './layout'
import { Router } from 'react-router-dom'

const CreateItem = (props) => {

    const [property, setProperty] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // Send new item data to api
        fetch('http://localhost:8080/api/items',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ property })
            }).then(function (response) {
                return response.json()
            }).then(function (data) {

                console.log('Created Item:', data) // could add user feedback

                props.history.push('/items')
            })
    }

    const handleChange = e => {
        setProperty(e.target.value)
    }


    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <label>Item String</label>
                <input onChange={handleChange} type="text" name="property" value={property} />
                <input type="submit" />
            </form>
        </Layout>
    );
}

export default CreateItem;