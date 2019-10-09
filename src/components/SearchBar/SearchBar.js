import React from 'react';
import './SearchBar.css';

// hard-coded filter object (will be returned by Yelp API)
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated':'rating',
    'Most Reviewed': 'review_count'
};

// Create SearchBar component
class SearchBar extends React.Component{

    // function to render the sort options returned by the Yelp API
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="www.#.com">Let's Go</a>
                </div>
            </div>
        );
    }

}

export default SearchBar;