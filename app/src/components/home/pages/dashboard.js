import React from 'react';
import {FaSistrix} from 'react-icons/fa';
import {GiCardExchange} from 'react-icons/gi'
import { Link } from 'react-router-dom';
 
function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='row'>
                <Link to='/Home/Search/'>
                    <div className='item'>
                        <span className='icon-section'>
                            <FaSistrix className='icon'/>
                        </span>
                        <span className='typo'>Land Search</span>
                    </div>
                </Link>
                
                <Link to='/Home/landtransfer/'>
                    <div className='item'>
                        <span className='icon-section'>
                            <GiCardExchange className='icon'/>
                        </span>
                        <span className='typo'>Land Transfer</span>
                    </div>
                </Link>
                {/* <Link to='/Home'>
                    <div className='item'>
                        <span className='icon-section'>
                            <FaSistrix className='icon'/>
                        </span>
                        <span className='typo'>Land Search</span>
                    </div>
                </Link> */}
            </div>
        </div>
    )
}

export default Dashboard
