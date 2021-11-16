
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { useState } from 'react'
import { useEffect } from 'react'





const CommentArea =(props)=>{

const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)

    // state = {
    //     comments: [], // comments will go here
    //     isLoading: false,
    //     isError: false
    // }

// useEffect as componentDidMount
useEffect(() => {
    const getDataFromApi =(prevProps) => {
        getData()
    }
    getDataFromApi()
    
}, [])


const getData = async ()=>{

setIsLoading(true);

            // this.setState({
            //     isLoading: true
            // })
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + props.asin, {
                    headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzcwNjg5NDQsImV4cCI6MTYzODI3ODU0NH0.vtoNjl4Gtz8if7lKj97PNS_HK6yxmMmwTktpgE3kJF4"
}
                })
                console.log(response)
                if (response.ok) {
                    let comments = await response.json()
                        setIsLoading(false);
                        setIsError(false);
                        setComments(comments)


                    // ({ comments: comments, isLoading: false, isError: false })
                } else {
                    console.log('error')
                    setIsLoading(false);
                    setIsError(false);

                    // this.setState({ isLoading: false, isError: true })
                }
            } catch (error) {
                console.log(error)
                setIsLoading(false);
                setIsError(true);


                // this.setState({ isLoading: false, isError: true })
            }
        
}
//    componentDidUpdate = async (prevProps) => {
//         if (prevProps.asin !== this.props.asin) {
//             this.setState({
//                 isLoading: true
//             })
//             try {
//                 let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
//                     headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzcwNjg5NDQsImV4cCI6MTYzODI3ODU0NH0.vtoNjl4Gtz8if7lKj97PNS_HK6yxmMmwTktpgE3kJF4"
// }
//                 })
//                 console.log(response)
//                 if (response.ok) {
//                     let comments = await response.json()
//                     this.setState({ comments: comments, isLoading: false, isError: false })
//                 } else {
//                     console.log('error')
//                     this.setState({ isLoading: false, isError: true })
//                 }
//             } catch (error) {
//                 console.log(error)
//                 this.setState({ isLoading: false, isError: true })
//             }
//         }
//     }

//useEffect as componentDidUpdate
useEffect((comments) => {
    
    return () => {
        
    }
}, [comments])




//useEffect as componentDidUnmount
useEffect(() => {
    
    return () => {
        
    }
})
    
        return (
            <div>
                {isLoading && <Loading />}
                {isError && <Error />}
                <AddComment asin={props.asin} />
                <CommentList commentsToShow={comments} />
            </div>
        )
   
}

export default CommentArea