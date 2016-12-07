import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { seatPopupVisibility } from '../../actions/popup.actions';

import './SeatPopup.container.scss';

class SeatPopup extends Component {

    close(){
        this.props.seatPopupVisibility(false);
    }

    render() {
        const { seatPopupVisibility } = this.props;
        if (this.props.store.seatPopupVisibility) {
            return (
                <div className="PopUp">
                    <div className="inputs">
                        <div className="icon">
                            <div className="circle">
                                <i className="fa fa-caret-down" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="row">
                            <p>Seat Title:</p>
                            <a>{this.props.store.currentSeat.Title}</a>
                        </div>
                        <div className="row">
                            <p>Occupant:</p>
                            <a>{this.props.store.currentSeat.UserId}</a>
                            <i aria-hidden="true" className="fa fa-times cross"></i>
                        </div>
                        <i className="fa fa-times cross" aria-hidden="true" onClick={this.close.bind(this)}></i>
                    </div>
                    <a className="popUpConfirm delete">DELETE</a>
                    <a className="popUpConfirm save" >SAVE</a>
                </div>
            );
        } else return null;
    }
}

SeatPopup.propTypes = {
    seatPopupVisibility: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
    store : state
});

const mapDispatchToProps = (dispatch, ownPorps) => {
	return {
        seatPopupVisibility: (bool) => dispatch(seatPopupVisibility(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatPopup);
