import shortid from 'shortid'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = (props) => {
    let { setUserInformation, userInformation } = props

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        id: shortid.generate()
    })
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const history = useHistory()
    const signInHandler = (e) => {
        e.preventDefault()
        setUserInformation([...userInformation, user])

        setUser({
            name: '',
            email: '',
            password: '',
            id: shortid.generate()
        })
        if (!user.name || !user.email || !user.password) {
            alert('Please Provide valid information')
        } else {
            history.push("/Login")
        }
    }
    useEffect(() => {
        // storing input userInformation
        localStorage.setItem("userInformation", JSON.stringify(userInformation))
    }, [userInformation])
    return (
        <div>
            <h2>Sign up Form</h2>
            <form onSubmit={signInHandler} >
                <label for='name'> Name </label>
                <input onChange={(e) => handleChange(e)} value={user.name} name='name' type="text" />
                <br />
                <label for='email'> Email </label>
                <input onChange={(e) => handleChange(e)} value={user.email} name='email' type="email" />
                <br />
                <label for='password'> Password </label>
                <input onChange={(e) => handleChange(e)} value={user.password} name='password' type="password" />
                <br />
                <button> Sign Up </button>
            </form>

        </div>
    );
}

export default Signup;