import React from 'react';

function Topbar(props) {
    // console.log("topbar", props.categories);
    // console.log("topbar", props.setSelectedCategory);

    const handleOrderSelection = (e) => {
        props.setSelectedCategory(e.target.value);
    }

    const handleSearch = () => {
        const search = document.querySelector('input').value;
        props.setSearch(search);
    }

    return (
        <div className='Topbar'>
            <select onChange={handleOrderSelection}>
                <option value="">Select...</option>
                <option value="Asc">Ascending</option>
                <option value="Desc">Descending</option>
            </select>
            <input type='text' placeholder='Search...' />
            <button type="submit" onClick={handleSearch}>Go</button>
        </div>
    );
}

export default Topbar;
