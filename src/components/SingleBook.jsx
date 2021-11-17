import React from 'react'
import { Card } from 'react-bootstrap'
// import CommentArea from './CommentArea'
import { useState } from 'react'



const SingleBook =(props)=> {



        
        return (
            <>
                <Card
                    // onClick={() => this.setState({ selected: !this.state.selected })}
                    onClick={() => 

props.ChangeSelectedBook(props.book.asin)
                        
                        // this.props.changeSelectedBook(this.props.book.asin)
                                    
                    }
                    style={{ border: props.book.selectedBook === props.book.asin ? '3px solid red' : 'none' }}
                >
                    <Card.Img variant="top" src={props.book.img} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>{props.book.title}</Card.Title>
                    </Card.Body>
                </Card>
                {/* {
                    this.state.selected && <CommentArea asin={this.props.book.asin} />
                } */}
            </>
        
        )

}

export default SingleBook