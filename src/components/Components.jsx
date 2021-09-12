import Blog from "./blog/Blogs"
import Login from "./login/Login";
import Signup from "./signup/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useState } from 'react'

const getUserInformation = () => {
    let userInformation = localStorage.getItem('userInformation')
    console.log(userInformation);
    if (userInformation) {
        return JSON.parse(localStorage.getItem('userInformation'))
    } else {
        return []
    }
}

const Components = () => {
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [userInformation, setUserInformation] = useState(getUserInformation())
    return (
        <div>
            <h2> WelCome to Blogbook </h2>
            <Router>

                <Link to="/Signup" ><button> Sign Up </button></Link>
                <Link to="/Login" ><button> Log in </button></Link>
                <Link to="/Blogs" ><button> Blogs </button></Link>

                <Switch>
                    <Route exact path="/" >
                        <Signup userInformation={userInformation}
                            setUserInformation={setUserInformation}
                        />
                    </Route>
                    <Route path="/Signup" >
                        <Signup userInformation={userInformation}
                            setUserInformation={setUserInformation}
                        />
                    </Route>
                    <Route path="/Login" >
                        <Login setLoggedInUser={setLoggedInUser}
                            loggedInUser={loggedInUser}
                            userInformation={userInformation}
                            setUserInformation={setUserInformation} />
                    </Route>
                    <Route path="/Blogs" >
                        <Blog loggedInUser={loggedInUser}
                            setLoggedInUser={setLoggedInUser}
                            userInformation={userInformation} />
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default Components;