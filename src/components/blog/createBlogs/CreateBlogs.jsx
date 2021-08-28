import { useState } from 'react'
import Form from './form/Form'
import AllBlogs from './allBlogs/AllBlogs'
import { useHistory } from 'react-router-dom'

// getting data from localstorage

const getAllBlogs = () => {
    let allBlogs = localStorage.getItem('allBlogs')
    console.log(allBlogs);
    if (allBlogs) {
        return JSON.parse(localStorage.getItem('allBlogs'))
    } else {
        return []
    }
}


const CreateBlogs = (props) => {
    let { loggedInUser, setLoggedInUser } = props
    const [blogData, setBlogData] = useState({
        blogName: '',
        blogDescription: ''
    })
    const [allBlogs, setAllBlogs] = useState(getAllBlogs())
    const blogHandler = (e) => {
        setBlogData({
            ...blogData,
            [e.target.name]: e.target.value
        })
    }
    const blogFormHandler = (e) => {
        e.preventDefault()
        setAllBlogs([...allBlogs, blogData])

        setBlogData({
            blogName: '',
            blogDescription: ''
        })
    }
    const history = useHistory()
    const loggedOut = () => {
        console.log(loggedInUser);
        setLoggedInUser(null)
        history.push("/Login")
        console.log('blogs', allBlogs);
        console.log(loggedInUser);
    }


    return (
        <div>
            {loggedInUser ? <button onClick={loggedOut}> Log Out </button> : ''}
            <Form blogData={blogData}
                blogFormHandler={blogFormHandler}
                blogHandler={blogHandler}
                loggedInUser={loggedInUser} />
            <AllBlogs allBlogs={allBlogs}
                loggedInUser={loggedInUser}
            />
        </div>
    );
}

export default CreateBlogs;