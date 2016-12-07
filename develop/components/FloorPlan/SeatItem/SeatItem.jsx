import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './SeatItem.scss';

import Draggable from 'react-draggable';

class SeatItem extends Component {

    chooseCurrentSeat(){
        this.props.chooseSeat(this.props.data);
    }

    render() {
        const { data, chooseSeat } = this.props;

        const style = {
            left: data.X,
            top : data.Y
        }

        let classes = classNames({
            'elForHighlight' : true,
            'highlight' : this.props.data == this.props.store.currentSeat ? true : false
        }); 

        return (
            <Draggable bounds='parent'>

                <div className="seatItem" style={style} onClick={this.chooseCurrentSeat.bind(this)}>
                    <i aria-hidden="true" className="fa fa-caret-down"></i>
                    <div className={classes}></div>
                    <p>{data.Title}</p>
                </div>

            </Draggable>
        );
    }
}

SeatItem.propTypes = {
    data: PropTypes.object,
    chooseSeat : PropTypes.func
};

export default SeatItem;
