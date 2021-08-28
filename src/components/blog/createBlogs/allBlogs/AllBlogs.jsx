import Comment from './comment/Comment'
import { useEffect } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const AllBlogs = (props) => {
    let { allBlogs, setAllBlogs, loggedInUser } = props

    const deleteBlog = (blog) => {
        if (!loggedInUser) {
            alert("For Delete You must log in")
        } else {
            const deletedBlog = allBlogs.filter((item) => item.id !== blog.id)
            setAllBlogs(deletedBlog)
            console.log(allBlogs);
        }

    }

    useEffect(() => {
        localStorage.setItem('allBlogs', JSON.stringify(allBlogs))
    }, [allBlogs])

    return (
        <div>
            {allBlogs.map((blog) => {
                return (
                    <div>
                        <h2>{blog.blogName}</h2>
                        <h4>{blog.blogDescription}</h4>
                        <p>Author : {loggedInUser?.name}</p>
                        <button onClick={() => deleteBlog(blog)}>Delete</button>
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