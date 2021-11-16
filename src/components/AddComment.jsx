
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import {useEffect} from 'react'


const AddComment = (props)=> {

        const [comment, setComment] = useState('')
        const [rate, setRate] = useState(1)
        const [elementId, setElementId] = useState(null)
    // state = {
    //     comment: {
    //         comment: '',
    //         rate: 1,
    //         elementId: null
    //     }
    // }
                useEffect(() => {
    
            sendComment()
        
    
}, [elementId])



    // componentDidUpdate(prevProps) {
    //     if (prevProps.asin !== this.props.asin) {
    //         this.setState({
    //             comment: {
    //                 ...this.state.comment,
    //                 elementId: this.props.asin
    //             }
    //         })
    //     }
    // }

   const sendComment = async (props) => {
      // e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments'+props.asin, {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzcwNjg5NDQsImV4cCI6MTYzODI3ODU0NH0.vtoNjl4Gtz8if7lKj97PNS_HK6yxmMmwTktpgE3kJF4"
                }
            })
            if (response.ok) {
                // the comment has been sent succesfully!!
                alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }
   
        return (
            <div>
                <Form onSubmit={sendComment}>
                    <Form.Group>
                        <Form.Label>Comment text</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add comment here"
                            value={comment.comment}
                            onChange={e => 
                                setComment({comment:{...comment, comment:e.taget.value}})
                            //     ({
                            //     comment: {
                            //         ...comment,
                            //         comment: e.target.value
                            //     }
                            // })
                        
                        }
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control 
                                as="select" 
                                value={comment.rate}
                                onChange={e => ({
                                comment: {
                                    ...comment,
                                    rate: e.target.value
                                }
                            })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    
}

export default AddComment