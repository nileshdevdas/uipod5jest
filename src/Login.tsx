import React from "react";
import 'react-bootstrap'

export class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleForm = this.handleForm.bind(this);
    }

    render() {
        return <div className='container'>
            <form className='form'>
                <div className='form-group'>
                    <label htmlFor='username' data-testid='username-label'>Username</label>
                    <input type="text" data-testid='username' defaultValue={this.state.username} id="username"
                           className='form-control-sm'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password' data-testid='password-label'>Password</label>
                    <input type="password" data-testid='password' defaultValue={this.state.password} id="password"
                           className='form-control-sm'/>
                </div>
                <div className='form-group'>
                    <button type='button' data-testid='login-submit' onClick={this.handleForm}>Login</button>
                </div>
                <div>{this.showErrors()}</div>
            </form>
        </div>;
    }

    handleForm() {
        this.setState({'error': 'username error1'});
    }

    showErrors() {
        if (this.state.error) {
            return <div className='alert alert-danger'>{this.state.error}</div>
        } else {
            return null;
        }
    }
}
