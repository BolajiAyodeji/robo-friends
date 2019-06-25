import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="pa2">
            <input
             className="tc pa3 mb5 ba br2 b--light-blue bg-lightest-blue"
             type="search"
             placeholder="&#x2315;  search robots"
             onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;