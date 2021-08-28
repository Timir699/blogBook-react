import { useState } from 'react'
import { useHistory } from 'react-router-dom'
const Login = (props) => {
    let { userInformation, setLoggedInUser } = props
    const [authUser, setAuthUser] = useState({
        email: '',
        password: ''
    })

    const authHnadler = (e) => {
        setAuthUser({
            ...authUser,
            [e.target.name]: e.target.value
        })
    }
    const history = useHistory()
    const logInHandler = (e) => {
        e.preventDefault()

        const expectData = userInformation.find((item) => {
            return authUser.email === item.email && authUser.password === item.password
        })

        if (expectData) {
            setLoggedInUser(expectData)
            history.push("/Blogs")
        } else if (authUser.email === '' || authUser.password === '') {
            alert("provide valid Information")
        }
        else {
            alert("Incorrect Information")
        }
    }
    return (
        <div>
            <h2>Log in</h2>
            <form onSubmit={logInHandler}>
                <label for='email'> Email </label>
                <input name='email' type="email" value={authUser.email} onChange={authHnadler} />
                <br />
                <label for='password' > Password </label>
                <input name='password' type="password" value={authUser.password} onChange={authHnadler} />
                <br />
                <button>Log In</button>
            </form>
        </div>
    );
}

export default Login;