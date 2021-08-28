import Comment from './comment/Comment'
import { useEffect } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
const AllBlogs = (props) => {
    let { allBlogs, loggedInUser } = props

    useEffect(() => {
        localStorage.setItem('allBlogs', JSON.stringify(allBlogs))
    }, [allBlogs])
    // console.log(allBlogs);
    return (
        <div>
            {allBlogs.map((blog) => {
                return (
                    <div>
                        <h2>{blog.blogName}</h2>
                        <h4>{blog.blogDescription}</h4>
                        <p>Author : {loggedInUser?.name}</p>
                        <Router>
                            <Link to="/Comment" > <p>comment</p> </Link>
                            <Route exact path="/Comment">
                                <Comment loggedInUser={loggedInUser} />
                            </Route>
                        </Router>

                    </div>
                )
            })}
        </div>
    );
}

export default AllBlogs;