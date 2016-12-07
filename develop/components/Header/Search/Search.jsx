import React, { Component, PropTypes } from 'react';

import './Search.scss';

class Search extends Component {

	search(e){
		this.props.handleSearch("http://localhost:3000/search=" + e.target.value);
	}

    render() {
        const { handleSearch } = this.props;

        return (
            <div className="search">
                <input type="text" onChange={this.search.bind(this)}/>
                <i aria-hidden="true" className="fa fa-search"></i>
                <ul className="results">
                	{this.props.store.search.map((item) => (
                	    <li key={item._id}><p>{item.Name}</p><p>{item.LastName}</p></li>
                	))}
				</ul>
            </div>
        );
    }
}

Search.propTypes = {
	handleSearch: PropTypes.func
};

export default Search;
