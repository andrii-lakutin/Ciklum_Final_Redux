import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginPopupVisibility } from '../../actions/popup.actions';
import { login } from '../../actions/api.actions';

import './LoginPopup.container.scss';

class LoginPopup extends Component {

    login(){
        let data = {
            name : this.refs.login.value,
            pass: this.refs.pass.value
        }
        this.props.login("http://localhost:3000/login" , data);
    }

    close(){
        this.props.loginPopupVisibility(false);
    }

    render() {
        const { loginPopupVisibility } = this.props;
 
        if (this.props.store.loginPopupVisibility && !this.props.store.login) {
            return (
                <section className="PopUp">
                    <div className="inputs">
                        <div className="row">
                            <p>Login</p>
                            <input type="text" ref='login'/>
                        </div>
                        <div className="row">
                            <p>Password</p>
                            <input type="password" ref='pass'/>
                        </div>
                        <i aria-hidden="true" className="fa fa-times cross" onClick={this.close.bind(this)}></i>
                    </div>
                    <a className="popUpConfirm" onClick={this.login.bind(this)}>Login</a>  
                </section>
            );
        } else return null;
    }
}

LoginPopup.propTypes = {
    loginPopupVisibility: PropTypes.func,
    login: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
    store : state
});

const mapDispatchToProps = (dispatch, ownPorps) => {
	return {
        loginPopupVisibility: (bool) => dispatch(loginPopupVisibility(bool)),
        login: (url, data) => dispatch(login(url, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
