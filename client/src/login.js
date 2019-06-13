import React from 'react';
import axios from 'axios';

class login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(this.state);

        try {
            const { username, password } = this.state

            const endpoint = 'http://localhost:5000/api/auth/login';
            const result = await axios.post(endpoint, {
                username: this.state.username,
                password: this.state.password,
            })

            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    render() {
        return (
            <div>
                <h3>Login</h3>

                <form onSubmit={this.handleSubmit}>
                    <input typer="text" name="username" placeholder="username" onChnage={this.handleChange} value={this.state.username} />
                    <input typer="text" name="password" placeholder="password" onChnage={this.handleChange} value={this.state.password} />
                    <button type="submit">login</button>
                </form>
            </div>
        )
    }
}

export default login;