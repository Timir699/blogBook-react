import CreateBlogs from './createBlogs/CreateBlogs'
const Blogs = (props) => {
    let { userInformation, loggedInUser, setLoggedInUser } = props
    return (
        <div>
            <h2>Hello Blog</h2>
            <CreateBlogs loggedInUser={loggedInUser}
                userInformation={userInformation}
                setLoggedInUser={setLoggedInUser} />
        </div>
    );
}

export default Blogs;