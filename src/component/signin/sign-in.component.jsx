import React from "react";

import './sign-in.style.css';

class SignIn extends React.Component {
    constructor(prosp){
        super(prosp)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:"",password:""})
    }
    hanleChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]: value})

    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an aaccount</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} action="">
                    <input name="email" type="email" value={this.state.email} required />
                    <label> Email</label>

                    <input name="password" type="password"
                    value={this.state.password} 
                    onChange={this.hanleChange}
                    required />
                    <label> Password</label>

                    <input type="Submit" value="Submit Form" />
                
                </form>
            </div>

        )
    }
}

export default SignIn;