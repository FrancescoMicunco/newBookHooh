import React from 'react'
import { Card } from 'react-bootstrap'
// import CommentArea from './CommentArea'
import { useState } from 'react'



const SingleBook =(props)=> {

const [changeSelectedBook, setChangeSelectedBook] = useState('')

    // state = {
    //     selected: false
    // }

    
        return (
            <>
                <Card
                    // onClick={() => this.setState({ selected: !this.state.selected })}
                    onClick={() => 

setChangeSelectedBook(props.book.asin)
                        
                        // this.props.changeSelectedBook(this.props.book.asin)
                                    
                    }
                    style={{ border: props.book.selectedBook === props.book.book.asin ? '3px solid red' : 'none' }}
                >
                    <Card.Img variant="top" src={props.book.book.img} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>{props.book.book.title}</Card.Title>
                    </Card.Body>
                </Card>
                {/* {
                    this.state.selected && <CommentArea asin={this.props.book.asin} />
                } */}
            </>
        
        )

}

export default SingleBook