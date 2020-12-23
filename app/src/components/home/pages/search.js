import React from 'react';
import {Link} from 'react-router-dom';

function Search() {
    return (
        <div className='page-wrapper'>
            <div className='search-wrapper'>
                <h3>Perform a Land Search</h3>
               <div>
               <Link to='/Home/mailoland/'>
                    Mailo Land
                </Link>
                <Link to='/Home/freehold/'>
                    Freehold Land
                </Link>
                <Link to='/Home/leasehold/'>
                    Leasehold Land
                </Link>
                
               </div>
            </div>

        </div>
    )
}

export default Search
