const Form = (props) => {
    let { blogData, blogFormHandler, blogHandler, loggedInUser } = props
    return (
        <div>
            {loggedInUser ? <form onSubmit={blogFormHandler}>
                <label for='blogName'> Blog Name </label>
                <input type="text" name="blogName" value={blogData.blogName} onChange={blogHandler} />
                <br />
                <label for='blogDescription'> Blog Description </label>
                <input type="text" name="blogDescription" value={blogData.blogDescription} onChange={blogHandler} />
                <br />
                <button> Create Blog </button>
            </form> : 'You are not logged in.please log in for create or delete blog.'}
        </div>
    );
}

export default Form;