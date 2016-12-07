import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../Header/Header.container.js';
import LoginPopup from '../LoginPopup/LoginPopup.container.js';
import SeatPopup from '../SeatPopup/SeatPopup.container.js';
import FloorPlan from '../FloorPlan/FloorPlan.container.js';
import '../../shared/reset.scss';

class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <Header/>
                <LoginPopup/>
                <FloorPlan/>
                <SeatPopup/>
            </div>
        );
    }
}

const mapStateTotProps = (state, ownProps) => ({
    ...ownProps,
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
});

export default connect(mapStateTotProps, mapDispatchToProps)(Layout);
