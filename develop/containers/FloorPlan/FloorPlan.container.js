import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './FloorPlan.container.scss';
import plan from '../../shared/19floor.svg';

import {getAllSeats} from '../../actions/api.actions';
import {chooseSeatAndOpenPopup} from '../../actions/seats.actions';

import SeatItem from '../../components/FloorPlan/SeatItem/SeatItem.jsx';

class FloorPlan extends Component {

    componentDidMount() {
        this.props.getAllSeats('http://localhost:3000/getAllSeats');
    }

    render() {
    	const { getAllSeats, chooseSeat } = this.props;

        return (
            <section className="floorPlan">
                <h1>SELECTION MODE</h1>
                <img src={plan} alt="FloorPlan" />
                {this.props.store.seats.map((item) => (
                    <SeatItem key={item._id} data={item} chooseSeat={chooseSeat} store = {this.props.store}/>
                ))}
            </section>
        );
    }
}

FloorPlan.propTypes = {
    getAllSeats: PropTypes.func,
    chooseSeat: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
    store : state
});

const mapDispatchToProps = (dispatch, ownPorps) => {
	return {
        getAllSeats: (url) => dispatch(getAllSeats(url)),
        chooseSeat: (seat) => dispatch(chooseSeatAndOpenPopup(seat))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FloorPlan);
