import React, { ChangeEvent, useState } from 'react'
import { Form, Segment } from 'semantic-ui-react'

function handleSubmit() {
    console.log('something')
}

function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = event.target
}

export default function FeedbackForm() {
    const [feedback, setFeedback] = useState({
        category: 'general',
        message: ''
    })

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Category' name='category' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Message' name='body' onChange={handleInputChange} />
            </Form>
        </Segment>
    )
}
