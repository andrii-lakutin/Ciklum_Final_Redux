import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginPopupVisibility } from '../../actions/popup.actions';
import { logout, search } from '../../actions/api.actions';

import Search from '../../components/Header/Search/Search.jsx';
import Login from '../../components/Header/Login/Login.jsx';
import Checkbox from '../../components/Header/Checkbox/Checkbox.jsx';

import './Header.container.scss';

class Header extends Component {

    render() {
    	const { loginPopupVisibility , logout, handleSearch} = this.props;

        return (
            <section className="header">
                <Search handleSearch={handleSearch} store = {this.props.store}/>
                <Checkbox/>
                <Login loginPopupVisibility = {loginPopupVisibility} 
                	   logout = {logout} 
                	   store = {this.props.store}/>
            </section>
        );
    }
}

Header.propTypes = {
    loginPopupVisibility: PropTypes.func,
    logout: PropTypes.func,
    handleSearch: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
    store : state
});

const mapDispatchToProps = (dispatch, ownPorps) => {
	return {
        loginPopupVisibility: (bool) => dispatch(loginPopupVisibility(bool)),
        logout : () => dispatch(logout()),
        handleSearch : (value) => dispatch(search(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
