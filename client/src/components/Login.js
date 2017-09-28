import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <div className="loginSplash">
                <div className="userInput">
                    <div className="formArea">
                        { /*
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Email Address</label>
                                <div>
                                    <Field
                                        name="email"
                                        component="input"
                                        type="text"
                                        placeholder="email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Password</label>
                                <div>
                                    <Field
                                        name="password"
                                        component="input"
                                        type="text"
                                        placeholder="password"
                                    />
                                </div>
                            </div>
                            <div>
                                <Button type="submit" disabled={pristine || submitting} bsStyle="success" id="loginButton" href="#">Sign in</Button>
                                {//} for reference
                                {//}<button type="submit" disabled={pristine || submitting}>
                                {//}    Submit
                                </button>
                            </div>
                        </form>
                        */}
                    </div>
                    <Button bsStyle="success" id="homeSearchButton" href="/results">Go!</Button>
                    Forgot password
                    New User
                </div>
            </div>
        );
    }
}

export default Login;