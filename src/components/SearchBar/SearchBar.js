import React from 'react'
import './SearchBar.css'




/*

1. getSortByClass would not return anything if I did not
refer to this.state since it is in the this.state object

2. This Function Returns the current CSS class for a sorting option.
*/


/*
This second method (handleSortByChange) updates the state by calling .setState to set the state to the sortByOption
this seems to mean that the css class should === the state.
*/

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                term: '',
                location: '',
                sortBy: 'best_match'
            };


        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSortByChange = this.handleSortByChange.bind(this)


        this.sortByOptions= {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
            }

        }

    getSortbyClass = (sortByOption) => {
        if (this.state.sortBy === sortByOption) {
            return 'active'
        } return ''

    }



// sortBy is in the this.state object.
    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption})
    }
        // this.setState({this.sortBy = sortByOption})  - old code repaste if change doesnt work
    //stop forgetting to add {} for Javascript !!

    handleTermChange(event) {
        this.setState({term: event.target.value})
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value})
    }

//if it cannot read event of undefined
    handleSearch(event) {
        debugger
        this.props.searchYelp(
            this.state.term,
            this.state.location,
            this.state.sortBy
        );
        //event.preventDefault();
    }

/* Inside of .handleSearch(), call the passed down .searchYelp() method (located on props).
Pass in the current state values of term, location, and sortBy as arguments.

prevent default may go here otherwise

On the next line, call event.preventDefault() to prevent the default action of
 clicking a link from triggering at the end of the method.*/

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li  key={sortByOptionValue}
                        className={this.getSortbyClass(sortByOptionValue)}
                        onClick={this.handleSortByChange}>{sortByOption} </li>
        });
    }


    render() {
        return(
    <div className="SearchBar">
        <div className="SearchBar-sort-options">
            <ul>
                {this.renderSortByOptions()}
            </ul>
        </div>
        <div className="SearchBar-fields">
            <input onChange={this.handleTermChange}
            placeholder="Search Businesses" />
            <input onChange={this.handleLocationChange}
            placeholder="Where?" />
        </div>
    {/* may need to switch div closing tags back */}
        <div className="SearchBar-submit">
            <a onClick = {this.handleSearch()}>Let's Go</a>
        </div>
    </div>
        );
    }
}

export default SearchBar;

// Line 14 might not be this.sortByOptionValue (maybe remove this)

/* Mistakes
Did not capitalize SearchBar properly , causing issues with the export
Did not use event.preventDefault in the correct scope (prevent default had to be called on the whole function to prevent default from all results)
Called searchYelp without adding .props to this so it did not call the function properly from app.js
*/

/* More mistakes

TypeError: Cannot convert undefined or null to object
-> This happened because I tried to return keys of an object that did not exist
-> This object had to be defined in the constructor so that way it would not come back null (keep within that scope).

*/