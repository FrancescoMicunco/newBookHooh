import { Button, ListGroup } from 'react-bootstrap'

const deleteComment = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE',
            headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzcwNjg5NDQsImV4cCI6MTYzODI3ODU0NH0.vtoNjl4Gtz8if7lKj97PNS_HK6yxmMmwTktpgE3kJF4"
}
        })
        if (response.ok) {
            alert('comment deleted!')
        } else {
            alert('comment NOT deleted!')
        }
    } catch (error) {
        alert('comment NOT deleted!')
    }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item>
        {comment.comment}
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>D</Button>
    </ListGroup.Item>
)

export default SingleComment