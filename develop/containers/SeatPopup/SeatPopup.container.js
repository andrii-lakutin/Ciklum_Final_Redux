import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { seatPopupVisibility, seatTitleEditing } from '../../actions/popup.actions';

import classNames from 'classnames';

import './SeatPopup.container.scss';

import Draggable from 'react-draggable';

class SeatPopup extends Component {

    close(){
        this.props.seatPopupVisibility(false);
    }

    changeTitle(){
        this.props.seatTitleEditing(true);
    }

    render() {
        const { seatPopupVisibility, seatTitleEdititng } = this.props;

        let inputDynamicClasses = classNames({
            'hideDefault' : true,
            'show' : this.props.store.seatTitleEditing ? true : false
        });

        let stringDynamicClasses = classNames({   
            'hideDefault' : true,      
            'show' : this.props.store.seatTitleEditing ? false : true
        });

        if (this.props.store.seatPopupVisibility) {
            return (
                <Draggable bounds='body'>
                    <div className="PopUp">
                        <div className="inputs">
                            <div className="icon">
                                <div className="circle">
                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="row">
                                <p>Seat Title:</p>
                                <input type="text" className={inputDynamicClasses}/>
                                <a onClick={this.changeTitle.bind(this)} className={stringDynamicClasses}>{this.props.store.currentSeat.Title}</a>
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
                </Draggable>
            );
        } else return null;
    }
}

SeatPopup.propTypes = {
    seatPopupVisibility: PropTypes.func,
    seatTitleEditing: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
    store : state
});

const mapDispatchToProps = (dispatch, ownPorps) => {
	return {
        seatPopupVisibility: (bool) => dispatch(seatPopupVisibility(bool)),
        seatTitleEditing: (bool) => dispatch(seatTitleEditing(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatPopup);
