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
    constructor(props){
        super(props);

        // The SearchBar component keeps track of the search 
        // term, location, and sortBy option states
        this.state = {
            term:'',
            location:'',
            sortBy: 'best_match'
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    // saves state of search term
    handleTermChange(event){
        this.setState( {term: event.target.value} );
    }

    // saves state of location
    handleLocationChange(event){
        this.setState( {location: event.target.value} );
    }

    // returns 'active' if filter is currently active
    getSortByClass(sortByOption){
        if (sortByOption === this.state.sortBy){
            return 'active';
        }
        return '';
    }

    // changes sortBy state if filter changes
    handleSortByChange(sortByOption){
        this.setState({ sortBy: sortByOption });
    }

    // function to render the sort options returned by the Yelp API
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>
        });
    }

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
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
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    {/* Activate handleSearch event handler on click */}
                    <a onClick={this.handleSearch} href="www.#.com">Let's Go</a>
                </div>
            </div>
        );
    }

}

export default SearchBar;