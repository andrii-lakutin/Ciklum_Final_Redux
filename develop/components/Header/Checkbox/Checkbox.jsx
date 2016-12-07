import React, { Component, PropTypes } from 'react';

import './Checkbox.scss';

class Checkbox extends Component {
    render() {
        const { handleCommonAction } = this.props;

        return (
            <div className="Checkbox">
                <label>
                	<input name="Without seat" type="checkbox" />
                	Without Seat
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
};

export default Checkbox;
