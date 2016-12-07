import React, { Component, PropTypes } from 'react';

import './Login.scss';

class Login extends Component {

    loginPopupVisibility(){
        this.props.store.loginPopupVisibility ? this.props.loginPopupVisibility(false) : this.props.loginPopupVisibility(true);
    }

    logout(){
        this.props.logout();
    }

    render() {
        const { loginPopupVisibility, logout } = this.props;
 
        if (!this.props.store.login) {
            return (
                <div
                  className='login'
                  onClick={this.loginPopupVisibility.bind(this)}
                >
                    Login
                </div>
            )
        } else {
            return (
                <div
                  className='login'
                  onClick={this.logout.bind(this)}
                >
                    Logout
                </div>
            )
        }
    }
}

Login.propTypes = {
    loginPopupVisibility: PropTypes.func,
    logout: PropTypes.func
};

export default Login;
