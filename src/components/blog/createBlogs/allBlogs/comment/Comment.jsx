import { useState } from 'react'
const Comment = (props) => {
    let { loggedInUser } = props
    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState([])
    const replyComment = (e) => {
        e.preventDefault()
        setAllComments([...allComments, comment])
        setComment('')
        console.log(allComments);
    }
    const replyHand = (e) => {
        setComment(e.target.value)
    }
    console.log(allComments);

    return (
        <div>
            {allComments.map((item) => {
                return (
                    <div style={{ marginLeft: "20px" }}>
                        <h4> {item} </h4>
                        <h6> Commented by : {loggedInUser?.name}</h6>
                    </div>
                )
            })}
            <form onSubmit={replyComment}>
                <input type="text" name="comment" value={comment} onChange={replyHand} />
                <br />
                <button>replie</button>

            </form>
        </div>
    );
}

export default Comment;