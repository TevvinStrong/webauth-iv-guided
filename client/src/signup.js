import React from 'react';

class signup extends React.Component {
    state = {
        fullname: '',
        username: '',
        password: '',
    }

    render() {
        return (
            <div>
                <h3>Signup</h3>

                <form onSubmit={this.handleSubmit}>
                    <input typer="text" name="username" placeholder="username" onChnage={this.handleChange} value={this.state.username} />
                    <input typer="text" name="password" placeholder="password" onChnage={this.handleChange} value={this.state.password} />
                    <button type="submit">sign up</button>
                </form>
            </div>
        )
    }
}

export default signup;