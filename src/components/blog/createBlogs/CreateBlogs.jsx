import {useState} from 'react'
import Form from './form/Form'
import AllBlogs from './allBlogs/AllBlogs'
import {useHistory} from 'react-router-dom'
const CreateBlogs = (props) => {
    let {userInformation, loggedInUser, setLoggedInUser} = props
    const [blogData, setBlogData] = useState({
        blogName : '',
        blogDescription : ''
    })
    const [allBlogs, setAllBlogs] = useState([])
    const blogHandler = (e) => {
        setBlogData({
            ...blogData,
            [e.target.name] : e.target.value
        })
    }
    const blogFormHandler = (e) => {
        e.preventDefault()
        setAllBlogs([...allBlogs, blogData ])
       
        setBlogData({
            blogName : '',
            blogDescription : ''
        })
    }
    const history = useHistory()
    const loggedOut = () => {
        console.log(loggedInUser);
        setLoggedInUser(null)
        history.push("/Login")
        console.log('blogs',allBlogs); 
        console.log(loggedInUser);
    }
    
    
    return ( 
        <div>
            { loggedInUser ? <button onClick = { loggedOut }> Log Out </button> : '' }
            <Form blogData = {blogData}
                  blogFormHandler = {blogFormHandler}
                  blogHandler = { blogHandler }
                  loggedInUser = {loggedInUser} />
            <AllBlogs allBlogs = {allBlogs}
                      loggedInUser = {loggedInUser}
            />
        </div>
     );
}
 
export default CreateBlogs;